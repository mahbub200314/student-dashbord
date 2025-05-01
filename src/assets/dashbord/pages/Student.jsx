import React from 'react'


const Student = () => {

  const users = [
    { id: 1, name: 'Harry ', email: 'harry@example.com', photo: 'https://i.pravatar.cc/40?img=1'  , certificates_earned: 10},
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
  ];

  const keys = Object.keys(users[1]).filter((key)=> key !== 'photo')  ;
  console.log(keys)
  return (
    <div className='flex p-5 pl-[5%] overflow-x'>
      <table className='table-auto border-collapse border-2 border-black w-[90%] text-center overflow-hidden rounded-2xl shadow-2xl '>
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
          users.map((user)=>(
            <tr key={user.id} className='hover:bg-gray-200'>
                <td className='text-center p-4'>{user.id}</td>
                <td  className='text-center p-4  flex gap-[0.8rem] items-center justify-center'>
                  <img src={user.photo} alt="" className='rounded-full' />
                  {user.name}</td>
                <td >{user.email}</td>
                <td >{user.certificates_earned}</td>

            </tr>
          ))
         }
        </tbody>
      </table>
   
    </div>
  )
}

export default Student
