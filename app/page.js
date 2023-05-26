import DataVisualizationContainer from "@/components/DataVisualizationContainer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center space-around p-6">
      <h1 className="container border text-center text-primary p-3">
        Time Series Data Visualization (NextJs & echarts-for-react)
      </h1>
      <div className="container border p-3">
        <DataVisualizationContainer />
      </div>
    </main>
  );
}
