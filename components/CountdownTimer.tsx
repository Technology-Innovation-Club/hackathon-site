"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

type TimeParts = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
};

type CountdownTimerProps = {
  className?: string;
  // Optional override; defaults to Oct 24, 2025 00:00 local time
  targetDate?: Date | string | number;
  title?: string;
};

function normalizeTarget(target?: Date | string | number): Date {
  if (target instanceof Date) return target;
  if (typeof target === "string" || typeof target === "number") return new Date(target);
  // Months are 0-indexed; 9 = October
  return new Date(2025, 9, 24, 0, 0, 0);
}

function getTimeParts(target: Date): TimeParts {
  const now = Date.now();
  const diff = target.getTime() - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds, isPast: false };
}

const unitBox = "glass-card rounded-xl px-5 py-4 text-center border border-white/10 bg-white/50";
const labelCls = "mt-1 text-xs uppercase tracking-wide text-black/70";
const valueCls = "font-pp-mondwest text-3xl md:text-4xl text-black leading-none";

export default function CountdownTimer({
  className,
  targetDate,
  title = "Countdown to Hackathon",
}: CountdownTimerProps) {
  const target = React.useMemo(() => normalizeTarget(targetDate), [targetDate]);
  const [time, setTime] = React.useState<TimeParts>(() => getTimeParts(target));

  React.useEffect(() => {
    const id = setInterval(() => {
      setTime(getTimeParts(target));
    }, 1000);
    return () => clearInterval(id);
  }, [target]);

  const NumberFlip = ({ value }: { value: number }) => (
    <div className="relative h-[1em] overflow-hidden">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={value}
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -16, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="inline-block tabular-nums"
        >
          {String(value).padStart(2, "0")}
        </motion.span>
      </AnimatePresence>
    </div>
  );

  return (
    <div className={clsx("w-full pb-20", className)}>
      <motion.div
        className="mx-auto flex max-w-5xl flex-col items-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-3 text-center font-pp-mondwest text-2xl md:text-3xl text-black">
          {title}
        </h2>
        <p className="mb-6 text-sm text-black/70">
          Starts October 24, 2025 • Pan-Atlantic University
        </p>

        {time.isPast ? (
          <div className="flex items-center gap-2 rounded-xl bg-green-100/70 px-4 py-3 text-green-800">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="font-medium">The hackathon is live!</span>
          </div>
        ) : (
          <div className="grid w-full max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
            <motion.div className={unitBox}>
              <div className={valueCls}>
                <NumberFlip value={time.days} />
              </div>
              <div className={labelCls}>Days</div>
            </motion.div>

            <motion.div className={unitBox}>
              <div className={valueCls}>
                <NumberFlip value={time.hours} />
              </div>
              <div className={labelCls}>Hours</div>
            </motion.div>

            <motion.div className={unitBox}>
              <div className={valueCls}>
                <NumberFlip value={time.minutes} />
              </div>
              <div className={labelCls}>Minutes</div>
            </motion.div>

            <motion.div className={unitBox}>
              <div className={valueCls}>
                <NumberFlip value={time.seconds} />
              </div>
              <div className={labelCls}>Seconds</div>
            </motion.div>
          </div>
        )}
      </motion.div>
    </div>
  );
}