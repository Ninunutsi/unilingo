import { useState } from "react";
import type { AppData } from "../../types/RequestI";
import styles from "./datalist.module.css";
import { Search } from "../../assets";
import { DataItem, Input, NoData } from "../../components";
import { useDebounce } from "../../hooks/useDebounce";

const DataList = ({ data }: { data: AppData | null }) => {
  const [showInput, setShowInput] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const name = data?.platforms?.name;
  const amount = data?.platforms?.amount;
  const DATA = data?.platforms?.data || [];

  //use debouce for input filtering
  const debouncedSearch = useDebounce(searchTerm, 300);

  const filteredData = DATA.filter((item) =>
    item.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  if (!data || !data.platforms) {
    return (
      <>
        <NoData msg="No data available" />
      </>
    );
  }

  return (
    <div>
      <div className={`headingCont`}>
        <div className={styles.headingFlex}>
          <h3 className="sectionHeading">{name}</h3>
          <p className={styles.p}>{amount} Languages</p>
        </div>
        <div className={styles.searchWrapper}>
          <Input
            type="text"
            placeholder="Search..."
            className={`${styles.searchInput} ${showInput ? styles.show : ""}`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search
            className={styles.searchIcon}
            onClick={() => setShowInput(!showInput)}
          />
        </div>
      </div>

      <div className={styles.item}>
        {filteredData.length > 0 ? (
          filteredData.map((item) => <DataItem key={item.name} item={item} />)
        ) : (
          <>
            <NoData msg="No data found" />
          </>
        )}
      </div>
    </div>
  );
};

export default DataList;
