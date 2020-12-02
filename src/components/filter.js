const FilterSearch = ({handleChange}) => (
  <div>
    Find countries: <input
      type='text'
      onChange={handleChange}
    />
  </div>
)

export default FilterSearch;