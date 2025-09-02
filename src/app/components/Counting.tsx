"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";


type StatCardProps = {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
};

const StatCard: React.FC<StatCardProps> = ({ value, suffix = "", label, duration = 2 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const increment = end / (duration * 60); // smooth animation
    const step = () => {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    requestAnimationFrame(step);
  }, [value, duration]);

  return (
    <motion.div
      className="stat-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="stat-value">
        {count}
        {suffix}
      </h2>
      <p className="stat-label">{label}</p>
    </motion.div>
  );
};

export default function StatsSection() {
  return (
    <section className="stats-section">
      <div className="stats-grid">
        <StatCard value={1000} suffix="+" label="Client Consultations" />
        <StatCard value={95} suffix="%" label="Successful Cases" />
        <StatCard value={10} suffix="m" label="Recovered cost for clients" />
        <StatCard value={30} suffix="+" label="Professional Attorneys" />
      </div>
    </section>
  );
}
