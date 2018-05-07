import React from 'react';
import Filter from './Filter';
import SlabList from './SlabList';

function Marketplace(){
  return (
    <marketplace>
      <style jsx>{`
        marketplace {
          background-color: red;
        }
        filter {
          color: silver;
        }
        slablist {
          color: white;
        }
      `}</style>
      <Filter/>
      Marketplace works!
    </marketplace>
  );
}
export default Marketplace;
