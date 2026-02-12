import { useSearchParams } from "react-router-dom";

const useProductFilter = () => {
    const [searchParams] = useSearchParams();
};

export default useProductFilter;
