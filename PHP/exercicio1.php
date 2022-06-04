<?php

#imprimir um texto
    echo "Escrevendo um texto. <br/><br/>";

    #Criação de variáveis:
    $idade = 16;
    $altura = 1.76;
    $nome = 'Gabriel';

    #Como chamar uma variável.
    echo "Idade: {$idade} Altura: {$altura} Nome: {$nome} <br/><br/>";

    echo " Idade: " .$idade. " Altura: " .$altura. " Nome: " .$nome. "<br/>";
    
    #Como pular linha.
    echo "<br/>";


    #converção de uma variável num tipo especifico 
    $valor = '20';
    echo "Mudando o tipo da variável.<br/><br/>";
    settype($valor, 'bool');
    echo "{$valor} <br/>";
    settype($valor, 'boolean');
    echo "{$valor} <br/>";
    settype($valor, 'string');
    echo "{$valor} <br/>";
    settype($valor, 'int');
    echo "{$valor} <br/>";

    $idad = (bool) $idade;
    echo "<br/> {$idad} <br/>";
    $idad = (int) $idade;
    echo "{$idad} <br/>";
    $idad = (boolean) $idade;
    echo "{$idad} <br/>";
    $idad = (string) $idade;
    echo "{$idad} <br/>";
    $idad = (binary) $idade;
    echo "{$idad} <br/><br/>";

    


    #criação de uma função

    if(is_int ($altura)){
        echo "Verdade <br/><br/>";
    }else{
        echo "Falso <br/><br/>";
    }

    if(is_float ($altura)){
        echo "Verdade <br/><br/>";
    }else{
        echo "Falso <br/><br/>";
    }

    if(is_integer ($altura)){
        echo "Verdade <br/><br/>";
    }else{
        echo "Falso <br/><br/>";
    }

    if(is_bool ($altura)){
        echo "Verdade <br/><br/>";
    }else{
        echo "Falso <br/><br/>";
    }

    if(is_object ($altura)){
        echo "Verdade <br/><br/>";
    }else{
        echo "Falso <br/><br/>";
    }

    #Var_dump nos mostra os valores e os tipos da variavel
    
    var_dump($altura);

    #verificação da variavel, se ela tem ou não algum valor

    if (isset ($altura)){
        echo " <br/><br/> A variável tem algum valor.  <br/><br/>";
    }else {
        echo " <br/><br/> A variável não tem nenhum valor.  <br/><br/>";
    }
    
    #verificação se a variavel nao tem valor
    
    if(empty($altura)){
        echo "A variável não tem valor.  <br/><br/>";
    }else echo "A variável não tem nada escrito.  <br/><br/>";
?>