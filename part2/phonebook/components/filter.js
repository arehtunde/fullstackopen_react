const FilterSearch = ({filter, handleFilter}) => (
  <div>
    Filter shown with: <input
      type='text'
      value={filter}
      onChange={handleFilter}
    />
  </div>
)

export default FilterSearch;