import { Form, useLoaderData, Link } from "react-router-dom";
import FormSelect from "./FormSelect";
import SearchInput from "./SearchInput";
import PriceRange from "./PriceRange";
import FormCheckbox from "./FormCheckbox";

const Filters = () => {
  const { meta, params } = useLoaderData();

  const { name, category, brand, freeShipping, price, sort } = params;

  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      <SearchInput
        type="search"
        label="Search"
        name="name"
        size="input-sm"
        defaultValue={name}
      />
      <FormSelect
        label="select brand"
        name="brand"
        list={meta.companies}
        size="select-sm"
        defaultValue={brand}
      />
      <FormSelect
        label="select category"
        name="category"
        list={meta.categories}
        size="select-sm"
        defaultValue={category}
      />
      <FormSelect
        label="sort by"
        name="sort"
        list={["a-z", "z-a", "high", "low"]}
        size="select-sm"
        defaultValue={sort}
      />

      <PriceRange
        label="Select price"
        name="price"
        size="range-sm"
        price={price}
      />
      <FormCheckbox
        label="free shipping"
        name="freeShipping"
        size="checkbox-sm"
        defaultValue={freeShipping}
      />
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
