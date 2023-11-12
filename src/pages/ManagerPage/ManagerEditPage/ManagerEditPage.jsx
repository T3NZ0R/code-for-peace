import React from 'react';
import { useParams } from 'react-router-dom';
import { useCollectionAPI } from '../../../hooks/useCollectionAPI';

const ManagerEditPage = () => {
    const {id} = useParams();
    console.log(id,'idfskjfsjID')

    const {collectionDataById:{data}} = useCollectionAPI({id:id});

    // useEffect(() => {
    //    const data = CollectionById(id);
    //    setCollectionData(data);
    //    console.log(data,'sdjifdjidgjidj')
    // },[])


    console.log(data,'idfskjfsj')

    return (
        <div>
            qwewqegfewgasdgdsagf
        </div>
    );
};

export default ManagerEditPage;
