const FilterHouse = (props) => {
  return (
    <>
      <label className='form_home' htmlFor='home'></label>
      <select
        className='form_home_text'
        name='home'
        id='home'
      
     
      >
        <option value='gryffindor'>Gryffindor</option>
        <option value='hufflepuff'>Hufflepuff</option>
        <option value='ravenclaw'>Ravenclaw</option>
        <option value='slytherin'>Slytherin</option>
      </select>
    </>
  );
};

export default FilterHouse;
