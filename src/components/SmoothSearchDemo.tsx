import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SmoothSearchDemo: React.FC = () => {
    const [status, setStatus] = useState("Searching for 'Modern Sofa'...");
    const [time, setTime] = useState("200ms");
    const [results, setResults] = useState([90, 70, 85]);

    useEffect(() => {
        const interval = setInterval(() => {
            const queries = ["'Fast WooCommerce'", "'Rust WASM'", "'High Scale'", "'Zero Latency'"];
            const randomQuery = queries[Math.floor(Math.random() * queries.length)];
            const randomTime = (Math.random() * 50 + 10).toFixed(0) + "ms";

            setStatus(`Searching for ${randomQuery}...`);
            setTime(randomTime);
            setResults([
                Math.floor(Math.random() * 40 + 60),
                Math.floor(Math.random() * 40 + 50),
                Math.floor(Math.random() * 40 + 55),
            ]);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="search-demo-box">
            <div className="search-input-fake">
                <motion.span
                    key={status}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {status}
                </motion.span>
                <motion.span
                    key={time}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="time-badge"
                >
                    {time}
                </motion.span>
            </div>
            <div className="search-results-fake">
                {results.map((width, i) => (
                    <motion.div
                        key={`${i}-${width}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${width}%` }}
                        transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                        className="result-bar"
                    />
                ))}
            </div>

            <style>{`
                .search-demo-box {
                    margin-top: 24px;
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: var(--radius-md);
                    padding: 24px;
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.4);
                }

                [data-theme="dark"] .search-demo-box {
                    background: rgba(26, 26, 29, 0.5);
                    border: 1px solid rgba(255, 255, 255, 0.15);
                }

                .search-input-fake {
                    background: white;
                    padding: 12px 16px;
                    border-radius: 12px;
                    font-size: 14px;
                    color: #999;
                    margin-bottom: 12px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 12px;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
                    flex-wrap: wrap;
                }

                [data-theme="dark"] .search-input-fake {
                    background: #2A2A2D;
                    color: #A0A0A0;
                }

                .time-badge {
                    background: var(--c-primary);
                    color: var(--c-primary-inverse);
                    padding: 2px 8px;
                    border-radius: 6px;
                    font-weight: 600;
                    font-size: 11px;
                    white-space: nowrap;
                    flex-shrink: 0;
                }

                .search-results-fake {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }

                .result-bar {
                    height: 8px;
                    background: rgba(0, 0, 0, 0.1);
                    border-radius: 4px;
                }

                [data-theme="dark"] .result-bar {
                    background: rgba(255, 255, 255, 0.1);
                }

                @media (max-width: 640px) {
                    .search-demo-box {
                        padding: 16px;
                        margin-top: 20px;
                    }

                    .search-input-fake {
                        padding: 10px 12px;
                        font-size: 12px;
                        gap: 8px;
                    }

                    .time-badge {
                        font-size: 10px;
                        padding: 2px 6px;
                    }

                    .result-bar {
                        height: 6px;
                    }
                }
            `}</style>
        </div>
    );
};

export default SmoothSearchDemo;
