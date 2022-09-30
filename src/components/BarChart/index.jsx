import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./style.css";

const data = [
  {
    name: 1,
    uv: 4000,
    pv: 2000,
  },
  {
    name: 2,
    uv: 3000,
    pv: 1398,
  },
  {
    name: 3,
    uv: 2000,
    pv: 2000,
  },
  {
    name: 4,
    uv: 2780,
    pv: 3908,
  },
  {
    name: 5,
    uv: 1890,
    pv: 4000,
  },
  {
    name: 6,
    uv: 2390,
    pv: 3800,
  },
  {
    name: 7,
    uv: 3490,
    pv: 4000,
  },
  {
    name: 8,
    uv: 3490,
    pv: 4300,
  },
  {
    name: 9,
    uv: 3490,
    pv: 4300,
  },
  {
    name: 10,
    uv: 3490,
    pv: 4300,
  },
];

function BarCharts() {
  return (
    <div className="barchart-container">
      <p className="barchart-text">Activité quotidiènne</p>
      <ResponsiveContainer width="100%" aspect={2}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
          barGap={8}
        >
          <CartesianGrid strokeDasharray="2 2" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis
            dataKey={""}
            orientation="right"
            interval={"preserveStartEnd"}
          />
          <Tooltip
            labelStyle={{
              display: "none",
            }}
            wrapperStyle={{
              color: "#FFF",
              background: "red",
              border: "none",
              outline: "none",
              width: "50px",
              height: "70px",
              textAlign: "center",
              lineHeight: "1.5",
            }}
            margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
          />
          <Legend
            height={40}
            verticalAlign="top"
            align="right"
            iconType={"circle"}
            style={{ margin: "1rem auto", width: "100px" }}
          />
          <Bar
            dataKey="pv"
            fill="#282D30"
            radius={[3, 3, 0, 0]}
            barSize={7}
            name={"Poids (kg)"}
          />
          <Bar
            dataKey="uv"
            fill="#e50019"
            radius={[3, 3, 0, 0]}
            barSize={7}
            name={"Calories brûlées (kCal)"}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarCharts;
