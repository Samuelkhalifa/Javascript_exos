//------------------------------------
// Exercice 4 _ Pyramide de Mario
//------------------------------------
answer = ""
answer = prompt("Salut, bienvenue dans ma super pyramide ! Combien d' tages veux-tu ?")
stageLine = ""

for(i = 1; i <= answer; i++) {
   console.log(`${"  ".repeat(answer - i) + "#".repeat(i)}`);
}



      /*COMMENTAIRES :
      Pourquoi avoir été obligé de mettre "  " au lieu de " " ????
      */

