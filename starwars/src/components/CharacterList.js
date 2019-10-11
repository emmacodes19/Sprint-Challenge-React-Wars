import axios from 'axios';
import React, {useEffect, useState} from 'react';
import CharacterCard from './CharacterCard';
import { Container, Row} from 'reactstrap';

export default function CharacterList() {
    const[characterData, setCharacterData] = useState([]);
    
    useEffect (() => {
        axios
        .get (`https://swapi.co/api/people/${characterData}`)
        .then(response => {
            console.log(response)
            setCharacterData(response.data.results);
        })
        .catch(error => {
            console.log("the data was not return", error);
          })
      }, [characterData]);



      return (

        <div className ='names'>

        {characterData.map((people)=> {
            return (

            <Container>
                 <Row>

                < CharacterCard
                key={people.id}
                name={people.name}
                height={people.height}
                gender={people.gender}
              
              />  

            </Row>
        </Container>
         

            )}
        )}
        </div>
        
      );
            }

    
