import React, { useMemo, useState } from 'react'
import './pages.css'

const Student = () => {

  const users = [
    { id: 1, name: 'Harrynpm  ', email: 'harry@example.com', photo: 'https://i.pravatar.cc/40?img=1'  , certificates_earned: 10},
    { id: 2, name: 'Maxwell', email: 'maxwell@example.com', photo: 'https://i.pravatar.cc/40?img=2'  , certificates_earned: 10 },
    { id: 3, name: 'David', email: 'david@example.com', photo: 'https://i.pravatar.cc/40?img=3'   , certificates_earned: 5},
    { id: 4, name: 'Henry', email: 'henry@example.com', photo: 'https://i.pravatar.cc/40?img=4'   , certificates_earned: 10},
    { id: 5, name: 'John', email: 'john@example.com', photo: 'https://i.pravatar.cc/40?img=5'   , certificates_earned: 10},
    { id: 6, name: 'Jane', email: 'jane@example.com', photo: 'https://i.pravatar.cc/40?img=6'  , certificates_earned: 2},
    { id: 7, name: 'Alice', email: 'alice@example.com', photo: 'https://i.pravatar.cc/40?img=7'   , certificates_earned: 10},
    { id: 8, name: 'Bob', email: 'bob@example.com', photo: 'https://i.pravatar.cc/40?img=8',  certificates_earned: 7}, 
    { id: 9, name: 'Charlie', email: 'charlie@example.com', photo: 'https://i.pravatar.cc/40?img=9'   , certificates_earned: 6},
    { id: 10, name: 'David', email: 'david@example.com', photo: 'https://i.pravatar.cc/40?img=10'   , certificates_earned:9},
    { id: 11, name: 'Eva', email: 'eva@example.com', photo: 'https://i.pravatar.cc/40?img=11'   , certificates_earned: 8},
    { id: 12, name: 'Charls', email: 'charles@example.com', photo: 'https://i.pravatar.cc/40?img=11'   , certificates_earned: 8},
    { id: 13, name: 'Hope', email: 'Hope@example.com', photo: 'https://i.pravatar.cc/40?img=1'  , certificates_earned: 2},
    { id: 14, name: 'Harr ', email: 'harr@example.com', photo: 'https://i.pravatar.cc/40?img=1'  , certificates_earned: 10},
    { id: 15, name: 'Maxwel', email: 'maxwel@example.com', photo: 'https://i.pravatar.cc/40?img=2'  , certificates_earned: 10 },
    { id: 16, name: 'Davig', email: 'davig@example.com', photo: 'https://i.pravatar.cc/40?img=3'   , certificates_earned: 5},
    { id: 17, name: 'Henr', email: 'henr@example.com', photo: 'https://i.pravatar.cc/40?img=4'   , certificates_earned: 10},
    { id: 18, name: 'Joh', email: 'joh@example.com', photo: 'https://i.pravatar.cc/40?img=5'   , certificates_earned: 10},
    { id: 19, name: 'Jan', email: 'jae@example.com', photo: 'https://i.pravatar.cc/40?img=6'  , certificates_earned: 2},
    { id: 20, name: 'Alic', email: 'alic@example.com', photo: 'https://i.pravatar.cc/40?img=7'   , certificates_earned: 10},
    { id: 21, name: 'Bobk', email: 'bobk@example.com', photo: 'https://i.pravatar.cc/40?img=8',  certificates_earned: 7}, 
    { id: 22, name: 'Charli', email: 'charli@example.com', photo: 'https://i.pravatar.cc/40?img=9'   , certificates_earned: 6},
    { id: 23, name: 'Davi', email: 'davi@example.com', photo: 'https://i.pravatar.cc/40?img=10'   , certificates_earned:9},
    { id: 24, name: 'Evau', email: 'evua@example.com', photo: 'https://i.pravatar.cc/40?img=11'   , certificates_earned: 8},
    { id: 25, name: 'Charl', email: 'charle@example.com', photo: 'https://i.pravatar.cc/40?img=11'   , certificates_earned: 8},
    { id: 26, name: 'Hopeu', email: 'Hopeu@example.com', photo: 'https://i.pravatar.cc/40?img=1'  , certificates_earned: 2},
  ];

  const keys = Object.keys(users[1]).filter((key)=> key !== 'photo')  ;


  const [search , setSearch] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; 

  const filterData = useMemo(()=>{

    let data = [...users];

    if(search){
      data = data.filter(
        (item)=>
          item.name.toLowerCase().includes(search.toLowerCase()) || item.email.toLowerCase().includes(search.toLowerCase())
      );
    }

    return data
  },[search] )



  // Pagination লজিক
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filterData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filterData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='flex flex-col p-5 pl-[5%] overflow-x'>

      <input type="text" placeholder='Search Student'
      className='border-2 border-bg-body-white text-text-gray placeholder-text-black outline-none bg-bg-body-white flex w-fit m-2 mb-5 p-2 px-4 rounded-[10px] '
      value={search}
      onChange={(e)=>{
      setSearch(e.target.value)
      }}
      />

      <table className='table-auto   w-[90%] text-center overflow-hidden rounded-2xl shadow-2xl '>

        <thead>
          <tr className='bg-gray-300'>
            {
              keys.map((key)=>(
                <th key={key} className=' py-4 text-theme'> {key.toUpperCase()}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
         {
         currentItems.length > 0 ?(
          currentItems.map((user)=>(
            <tr key={user.id} className='hover:bg-gray-200'>
                <td className='text-center p-4'>{user.id}</td>
                <td  className='text-center p-4  flex gap-[0.8rem] items-center justify-center'>
                  <img src={user.photo} alt="" className='rounded-full' />
                  {user.name}</td>
                <td >{user.email}</td>
                <td >{user.certificates_earned}</td>

            </tr>
          ))      
         ):(
          <tr>
            <td className='cols-span-3'> no data found</td>
          </tr>
         )
         }
        </tbody>
      </table>
   
      <div className='flex justify-center mt-4'>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`mx-2 px-4 py-2 rounded-md bg-bg-blue-theme cursor-pointer  ${currentPage === index + 1 ? 'bg-bg-blue-theme text-font-htag' : 'bg-gray-200'}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
        
    </div>
  )
}

export default Student
