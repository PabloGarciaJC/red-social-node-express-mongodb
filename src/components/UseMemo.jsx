// components/UseMemo.jsx
import React, { useState, useMemo } from "react";
import { FaFlask, FaCode, FaInfoCircle, FaBook, FaSitemap } from "react-icons/fa";

export default function UseMemo() {
  const [numero, setNumero] = useState(0);

  // 🧠 useMemo memoriza el resultado de un cálculo para no recalcularlo innecesariamente
  const factorial = useMemo(() => {
    const calcularFactorial = (n) => (n <= 1 ? 1 : n * calcularFactorial(n - 1));
    return calcularFactorial(numero);
  }, [numero]);

  return (
    <div className="container">
      <h1 className="title flex items-center gap-2">
        <FaFlask className="icon" /> UseMemo
      </h1>

      {/* 📘 Nueva card: Definición completa de useMemo */}
      <div className="card card-info">
        <div className="flex items-center gap-2">
          <FaBook className="icon" />
          <strong>¿Qué es useMemo?</strong>
        </div>
        <p className="mt-2">
          <code>useMemo</code> es un <strong>hook de React</strong> que permite{" "}
          <strong>memorizar el resultado de una función o cálculo costoso</strong>,
          evitando que se vuelva a ejecutar en cada render si las dependencias no cambian.
        </p>
        <p className="mt-2">
          Es especialmente útil cuando un componente realiza operaciones pesadas
          (como cálculos matemáticos o filtrado de grandes listas) que podrían
          afectar el rendimiento.
        </p>
      </div>

      {/* 💡 Qué hace useMemo */}
      <div className="card card-info flex items-center gap-2">
        <FaInfoCircle className="icon" />
        <strong>Qué hace useMemo:</strong> Memoriza el resultado de una función costosa
        para que no se vuelva a calcular en cada render si las dependencias no cambian.
        Ideal para optimizar rendimiento.
      </div>

      {/* ⚙️ Ejemplo práctico */}
      <div className="card card-info">
        <p>
          Factorial de <strong>{numero}</strong>: {factorial}
        </p>
        <input
          className="input"
          type="number"
          value={numero}
          onChange={(e) => setNumero(Number(e.target.value))}
        />
      </div>

      {/* 📄 Ejemplo de código */}
      <div className="card card-info">
        <div className="flex items-center gap-2">
          <FaCode className="icon" />
          <strong>Ejemplo de código:</strong>
        </div>
        <pre className="code-block">
          <code>
{`const [numero, setNumero] = useState(0);

// useMemo memoriza el resultado del cálculo
const factorial = useMemo(() => {
  const calcularFactorial = n => (n <= 1 ? 1 : n * calcularFactorial(n - 1));
  return calcularFactorial(numero);
}, [numero]);

<input
  type="number"
  value={numero}
  onChange={e => setNumero(Number(e.target.value))}
/>`}
          </code>
        </pre>
      </div>

      {/* 🧩 Nueva Card: Explicación visual paso a paso */}
      <div className="card card-info">
        <div className="flex items-center gap-2">
          <FaSitemap className="icon" />
          <strong>Cómo funciona useMemo (resumen visual):</strong>
        </div>

        <ol className="list-decimal ml-6 mt-2 space-y-2">
          <li>
            <strong>Sin useMemo:</strong> Cada render ejecuta el cálculo completo,
            incluso si los datos no cambiaron.
          </li>
          <li>
            <strong>Con useMemo:</strong> React guarda (“memoiza”) el resultado del cálculo
            y solo lo vuelve a ejecutar cuando cambian las dependencias.
          </li>
          <li>
            <strong>Beneficio:</strong> Mejora el rendimiento evitando cálculos innecesarios.
          </li>
        </ol>

        <pre className="code-block mt-4">
          <code>
{`Render 1: calcula factorial(0) → guarda el resultado
Render 2: número no cambió → usa el valor memorizado
Render 3: número cambió → recalcula factorial(nuevo)`}          
          </code>
        </pre>

        <p className="mt-2">
          ⚡ <strong>En resumen:</strong> <code>useMemo</code> se usa para memorizar
          el <em>resultado</em> de un cálculo, mientras que <code>useCallback</code> se usa
          para memorizar la <em>función</em> misma.
        </p>
      </div>
    </div>
  );
}
