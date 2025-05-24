"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalCom({ btnTitle }: { btnTitle: string }) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <span
      data-cal-namespace="30min"
      data-cal-link="carl-michael-libo-on-vh8bih/30min"
      data-cal-config='{"layout":"month_view"}'
    >
      {btnTitle}
    </span>
  );
}
