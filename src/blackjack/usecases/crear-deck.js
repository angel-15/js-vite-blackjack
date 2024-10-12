import _ from 'underscore';


/**
 * Esta funcion crea un nuevo deck
 * @param {Array<String>} TiposDeCarta Ejemplo: ['C','D','H','S']
 * @param {Array<String>} TiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */

// Esta función crea un nuevo deck
export const crearDeck = ( TiposDeCarta, TiposEspeciales) => {

    if ( !TiposDeCarta || TiposDeCarta.length === 0 ) 
        throw new Error('TiposDeCarta es obligarotio como un arreglo de string');

    if ( !TiposEspeciales || TiposEspeciales.length === 0 ) 
        throw new Error('TiposEspeciales es obligarotio como un arreglo de string');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of TiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of TiposDeCarta ) {
        for( let esp of TiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}


// export default crearDeck; solo se puede tener una exportacion por defecto