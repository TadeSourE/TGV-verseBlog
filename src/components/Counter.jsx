import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 rounded-xl border border-acg-blue/30 bg-acg-blue/10 flex items-center gap-4 not-prose my-8">
      <div className="text-4xl">⚡</div>
      <div>
        <h3 className="font-bold text-lg">能量收集器 (React Component)</h3>
        <p className="text-sm opacity-70 mb-2">这是一个嵌入在 Markdown 里的动态组件。</p>
        <button 
            onClick={() => setCount(count + 1)}
            className="px-4 py-1 bg-acg-blue text-black font-bold rounded hover:bg-white transition-colors"
        >
          点击充能: {count}
        </button>
      </div>
    </div>
  );
}