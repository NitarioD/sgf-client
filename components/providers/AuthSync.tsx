"use client";

import { useEffect, useRef } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { hydrateAuth, logout } from "@/store/slices/authSlice";
import { getPublicApiBaseUrl } from "@/lib/apiBase";

/**
 * Hydrates auth from localStorage, syncs axios headers, registers 401 interceptor.
 */
export function AuthSync() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const token = useAppSelector((s) => s.auth.token);
  const hydrated = useRef(false);

  useEffect(() => {
    axios.defaults.baseURL = getPublicApiBaseUrl();
  }, []);

  useEffect(() => {
    if (hydrated.current) return;
    hydrated.current = true;
    try {
      const raw = localStorage.getItem("auth");
      if (raw) {
        const data = JSON.parse(raw) as { user?: unknown; token?: string };
        if (data?.token) {
          dispatch(
            hydrateAuth({
              user: (data.user ?? null) as import("@/store/slices/authSlice").AuthUser,
              token: data.token,
            })
          );
        }
      }
    } catch {
      /* ignore */
    }
  }, [dispatch]);

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common.Authorization;
    }
  }, [token]);

  useEffect(() => {
    const id = axios.interceptors.response.use(
      (res) => res,
      (error: { response?: { status?: number }; config?: { __isRetryRequest?: boolean } }) => {
        const res = error.response;
        const cfg = error.config;
        if (res?.status === 401 && cfg && !cfg.__isRetryRequest) {
          dispatch(logout());
          localStorage.removeItem("auth");
          delete axios.defaults.headers.common.Authorization;
          router.push("/signin/");
        }
        return Promise.reject(error);
      }
    );
    return () => {
      axios.interceptors.response.eject(id);
    };
  }, [dispatch, router]);

  return null;
}
