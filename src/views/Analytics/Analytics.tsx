import { Suspense, lazy } from "react";
import { useAppData } from "../../hooks/useAppData";
import { Loader, Section, SkeletonLoader } from "../../components";
import { DataList } from "../../UI";
import styles from "./analytics.module.css";
import { ErrorBoundary } from "../../utils";
const WatchTimeChart = lazy(
  () => import("../../UI/WatchTimeChart/WatchTimeChart")
);

const Analytics = () => {
  const { data, loading, error } = useAppData();

  if (loading) return <Loader />;
  if (error) return <p>something went wrong. please try again</p>;

  return (
    <div className={styles.container}>
      <h2>Analytics</h2>
      <p>
        Get a complete view of how your channels are growing with us right here.
      </p>
      <h3>Insights</h3>
      {/* this ection shows list of platforms */}
      <Section style={{ marginBottom: "16px" }}>
        <DataList data={data} />
      </Section>
      {/* chart section */}
      <Section>
        <>
          <div>
            <h3 className="sectionHeading">Watch Time</h3>
            <p className={styles.p}>
              Tracks the overtime watch time gained over all locals and
              platforms
            </p>
          </div>
          <ErrorBoundary>
            <Suspense
              fallback={<SkeletonLoader width={"100%"} height={"240px"} />}
            >
              <WatchTimeChart
                info={data?.watchTimeMonthly}
                title=""
                Xtitle="Months"
                Ytitle="Minutes"
                dataset={[
                  {
                    label: "Original Channel",
                    color: "#DEDEDE",
                    dataKey: "original",
                  },
                  { label: "Expanded", color: "#EB3D3D", dataKey: "expanded" },
                ]}
              />
            </Suspense>
          </ErrorBoundary>
        </>
      </Section>
    </div>
  );
};

export default Analytics;
