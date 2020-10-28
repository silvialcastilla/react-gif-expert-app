import React from 'react'
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import {AddCategory} from "../../components/AddCategory";

describe('Pruebas en <AddCategory />', () => {
    //Con jest fn, evaluaremos la función, con ello puedes saber si fue llamada, cómo fue llamada, cuantas veces...
    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories } /> );

    beforeEach(() => {
        //Se pone para resetearlo, así las pruebas que consdieran que se inicializan cuando se hace el test, pueden ejecutarse, ya que se 'resetea
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    })

    test('Debe de mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot()
    })
    test('Debe de cambiar la caja de texto', () => {

        const input = wrapper.find('input')

        //Como estamos intentando ver si cambia, pero el valor es undefined porque no hemos escrito nada, se pone el argumento e entre parentesis, dentro de él está en target y dentro value

        const value = 'Hola Mundo'
        //Change es de onChange, y como llama a handleInputChange, es la forma de llamar a las funciones
        input.simulate('change', {target: {value}})


    })

    test('Debe de cambiar la caja de texto', () => {

        const input = wrapper.find('input')

        //Como estamos intentando ver si cambia, pero el valor es undefined porque no hemos escrito nada, se pone el argumento e entre parentesis, dentro de él está en target y dentro value

        const value = 'Hola Mundo'
        //Change es de onChange, y como llama a handleInputChange, es la forma de llamar a las funciones
        input.simulate('change', {target: {value}})


    })

    
    test('No debe de postear la información con submit si no hay nada enviado', () => {

        wrapper.find('form').simulate('submit', {preventDefault: () => {}})
        //Para señalar que no se ha llamado.
        expect(setCategories).not.toHaveBeenCalled()
    })

    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {

       const value = 'Hola Mundo'
        //1. Simular el inputChange
        wrapper.find('input').simulate('change', {target: {value}})
        //2. Simular el submit
        wrapper.find('form').simulate('submit', {preventDefault: () => {}})
        //3. setCategories se debe haber llamado
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        //4. El valor del input debe de estar vacio
        expect(wrapper.find('input').prop('value')).toBe('')
    })

})