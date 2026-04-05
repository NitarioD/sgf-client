"use client";

import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setAdminContent } from "@/store/slices/uiSlice";

/** Replaces legacy AdminContentContext [content, setContent] tuple. */
export function useAdminContent(): [string, (v: string) => void] {
  const content = useAppSelector((s) => s.ui.adminContent);
  const dispatch = useAppDispatch();
  const setContent = useCallback(
    (v: string) => {
      dispatch(setAdminContent(v));
    },
    [dispatch]
  );
  return [content, setContent];
}
