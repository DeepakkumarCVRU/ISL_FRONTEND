
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

interface MarketValueHistory {
    year: number;
    value: number;
}

interface MarketValue {
    current: number;
    currency: string;
    history: MarketValueHistory[];
}

interface MarketValueChartProps {
    marketValue: MarketValue;
}


const MarketValueChart = ({
    marketValue,
}: MarketValueChartProps) => {
    const formatValue = (value: number) =>
        `€${value}M`;

    return (
        <div className="w-full rounded-xl bg-white p-5 shadow">
            <div className="mb-5">
                <h2 className="text-xl font-bold text-gray-800">
                    Market Value History
                </h2>

                <p className="mt-1 text-3xl font-bold text-green-600">
                    {marketValue.currency === "EUR" ? "€" : ""}
                    {marketValue.current}M
                </p>

                <p className="text-sm text-gray-500">
                    Current Market Value
                </p>
            </div>

            <div className="h-55 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={marketValue.history}
                        margin={{
                            top: 10,
                            right: 10,
                            left: 0,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="#e5e7eb"
                        />

                        <XAxis
                            dataKey="year"
                            tick={{ fontSize: 12 }}
                            stroke="#9ca3af"
                            type="number"
                            domain={["dataMin", "dataMax"]}
                            tickCount={9}
                            allowDecimals={false}
                        />

                        <YAxis
                            tickFormatter={formatValue}
                            tick={{ fontSize: 12 }}
                            stroke="#9ca3af"
                        />

                        <Tooltip
                            formatter={(value) => [
                                `${marketValue.currency === "EUR" ? "€" : ""}${value}M`,
                                "Market Value",
                            ]}
                            labelFormatter={(label) => `Year: ${label}`}
                        />

                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke="#16a34a"
                            strokeWidth={2}
                            dot={{
                                r: 5,
                                fill: "#16a34a",
                                strokeWidth: 1,
                                stroke: "#ffffff",
                            }}
                            activeDot={{ r: 10 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default MarketValueChart;
