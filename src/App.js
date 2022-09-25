import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

const App = () => {
  return ( 
    <div className='flex flex-col w-screen h-screen bg-black'>
      <div className='flex flex-row w-screen h-fit p-10 bg-orange-200 justify-between items-start' >
        <p className='text-[2vmax] font-bold text-orange-600' >Officer's <br/> Matrimony</p>
        <div className='flex flex-row w-fit justify-between text-white' >
          <p className='mx-2 p-2' >Home</p>
          <p className='mx-2 p-2' >About Us</p>
          <p className='mx-2 p-2 bg-orange-600 ' >Sign Up</p>
        </div>
      </div>
      <div className='flex flex-row py-4 px-10 justify-between items-center bg-orange-200' >
        <div className='flex flex-col w-[12%] h-fit mr-10' >
          <p className='text-xl text-black font-bold' ><span className='text-[2vmax]' >1</span>&nbsp; Personal Details</p>
          <div className='flex w-[250px] h-[6px] bg-white' ></div>
        </div>

        <div className='flex flex-col w-[12%] h-fit mr-10' >
          <p className='text-xl text-black font-bold' ><span className='text-[2vmax]' >1</span>&nbsp; Personal Details</p>
          <div className='flex w-[250px] h-[6px] bg-white' ></div>
        </div>
        <div className='flex flex-col w-[12%] h-fit mr-10' >
          <p className='text-xl text-black font-bold' ><span className='text-[2vmax]' >1</span>&nbsp; Documents Upload</p>
          <div className='flex w-[250px] h-[6px] bg-white' ></div>
        </div>
        <div className='flex flex-col w-[12%] h-fit mr-10' >
          <p className='text-xl text-black font-bold' ><span className='text-[2vmax]' >1</span>&nbsp; Verify and Admit</p>
          <div className='flex w-[250px] h-[6px] bg-orange-600' ></div>
        </div>
      </div>
      <div  className='flex flex-col w-screen h-fit bg-gradient-to-b from-amber-500 via-orange-600 to-rose-700 justify-center items-center py-10'>

        <div className='flex flex-row w-screen h-fit px-10 py-7  bg-black bg-opacity-20' >
          <div className='flex flex-col w-[50%] h-fit ' >

            <div className='flex flex-col w-[90%] mt-10' >
              <div className='flex flex-row w-[70%] justify-between' >
                <p className='text-xl text-black' >Name</p>
                <span className='text-white' >Lorem Ipsum</span>
              </div>
              <div className='w-full h-[1px] bg-white mt-3' ></div>
            </div>
            
            <div className='flex flex-col w-[90%] mt-10' >
              <div className='flex flex-row w-[70%] justify-between' >
                <p className='text-xl text-black' >Email</p>
                <span className='text-white' >Lorem Ipsum</span>
              </div>
              <div className='w-full h-[1px] bg-white mt-3' ></div>
            </div>

            <div className='flex flex-col w-[90%] mt-10' >
              <div className='flex flex-row w-[70%] justify-between' >
                <p className='text-xl text-black' >Phone No.</p>
                <span className='text-white' >Lorem Ipsum</span>
              </div>
              <div className='w-full h-[1px] bg-white mt-3' ></div>
            </div>

            <div className='flex flex-col w-[90%] mt-10' >
              <div className='flex flex-row w-[70%] justify-between' >
                <p className='text-xl text-black' >Occupation</p>
                <span className='text-white' >Lorem Ipsum</span>
              </div>
              <div className='w-full h-[1px] bg-white mt-3' ></div>
            </div>

          </div>

          <div className='flex flex-col w-[50%] h-fit ' >

            <div className='flex flex-col w-[90%] mt-10' >
              <div className='flex flex-row w-[70%] justify-between' >
                <p className='text-xl text-black' >Income</p>
                <span className='text-white' >Lorem Ipsum</span>
              </div>
              <div className='w-full h-[1px] bg-white mt-3' ></div>
            </div>
            
            <div className='flex flex-col w-[90%] mt-10' >
              <div className='flex flex-row w-[70%] justify-between' >
                <p className='text-xl text-black' >Address</p>
                <span className='text-white' >Lorem Ipsum</span>
              </div>
              <div className='w-full h-[1px] bg-white mt-3' ></div>
            </div>
          </div>
        </div>
        <div className='flex flex-row w-screen h-fit px-10 py-7  bg-black bg-opacity-20 justify-center mt-14' >
          <button className='text-white text-xl w-fit h-fit px-3 py-2 bg-blue-600 rounded-xl' >Verify</button>
          </div>

          <div className='flex flex-row w-screen h-fit px-10 py-7  bg-black bg-opacity-20' >
          <div className='flex flex-col w-[50%] h-fit ' >

            <div className='flex flex-col w-[90%] mt-10' >
              <div className='flex flex-row w-[70%] justify-between' >
                <p className='text-xl text-black' >Religion</p>
                <span className='text-white' >Lorem Ipsum</span>
              </div>
              <div className='w-full h-[1px] bg-white mt-3' ></div>
            </div>
            
            <div className='flex flex-col w-[90%] mt-10' >
              <div className='flex flex-row w-[70%] justify-between' >
                <p className='text-xl text-black' >Status</p>
                <span className='text-white' >Lorem Ipsum</span>
              </div>
              <div className='w-full h-[1px] bg-white mt-3' ></div>
            </div>

          </div>

          <div className='flex flex-col w-[50%] h-fit ' >

            <div className='flex flex-col w-[90%] mt-10' >
              <div className='flex flex-row w-[70%] justify-between' >
                <p className='text-xl text-black' >Caste</p>
                <span className='text-white' >Lorem Ipsum</span>
              </div>
              <div className='w-full h-[1px] bg-white mt-3' ></div>
            </div>
            
            <div className='flex flex-col w-[90%] mt-10' >
              <div className='flex flex-row w-[70%] justify-between' >
                <p className='text-xl text-black' >Mother Tongue</p>
                <span className='text-white' >Lorem Ipsum</span>
              </div>
              <div className='w-full h-[1px] bg-white mt-3' ></div>
            </div>
          </div>
        </div>
        <div className='flex flex-row w-screen h-fit px-10 py-7  bg-black bg-opacity-20 justify-center' >
          <button className='text-white text-xl w-fit h-fit px-3 py-2 bg-blue-600 rounded-xl' >Verify</button>
        </div>

        <div className='flex flex-row w-screen h-fit px-10 py-7 mt-14 justify-center' >
          <button className='text-white text-xl w-fit h-fit px-6 py-2 bg-blue-600 rounded-xl' >Submit</button>
        </div>
      </div>
    </div>
   );
}
 
export default App;