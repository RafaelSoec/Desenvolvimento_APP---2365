import React, { useEffect, useState } from 'react'
import PetCard from '../../components/PetCard'
import {Container} from './styles'
import {FirebaseService} from '../../services/FirebaseService.js';


const HelpPage = () => {

  const [animalList, setAnimalList] = useState({});

  const getAnimalList = async () => {
    await FirebaseService.getDataList('animal', listAnimals => {
      setAnimalList({listAnimals: listAnimals});
    });
  }

  useEffect(() => {
    getAnimalList();
  }, []);

  const renderItem = ({item}) => {
    return (
      <PetCard 
        location={item.local} 
        name={item.nome} 
        sex={item.sexo} 
        age={item.idade} 
        size={item.porte} 
      />
    )
  }


  return (
    <Container 
      data={animalList.listAnimals} 
      renderItem={renderItem} 
      extraData={animalList}
      keyExtractor={(item) => item.key}
    >
    </Container>
  )
}

export default HelpPage
