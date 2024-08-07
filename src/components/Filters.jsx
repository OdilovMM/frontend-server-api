import { Form, useLoaderData, Link } from "react-router-dom";
import FormSelect from "./FormSelect";
import SearchInput from "./SearchInput";
import PriceRange from "./PriceRange";
import FormCheckbox from "./FormCheckbox";

const Filters = () => {
  const { meta } = useLoaderData();
  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      <SearchInput type="search" label="Search" name="search" size="input-sm" />
      <FormSelect
        label="select brand"
        name="brand"
        list={meta.companies}
        size="select-sm"
      />
      <FormSelect
        label="select category"
        name="brand"
        list={meta.categories}
        size="select-sm"
      />
      <FormSelect
        label="sort by"
        name="brand"
        list={["a-z", "z-a", "high", "low"]}
        size="select-sm"
      />

      <PriceRange label="Select price" name="Price" size="range-sm" />
      <FormCheckbox label="free shipping" name="Shipping" size="checkbox-sm" />
      <button type="submit" className="btn btn-primary btn-sm capitalize">
        search
      </button>
      <Link to="/products" className="btn-accent btn btn-sm ">
        Reset
      </Link>
    </Form>
  );
};

export default Filters;
