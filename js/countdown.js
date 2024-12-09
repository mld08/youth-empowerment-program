const targetDate = new Date('January 11, 2025 00:00:00').getTime();

const countdown = setInterval(function() {

    // Obtenez la date et l'heure actuelles
    const now = new Date().getTime();

    // Calculez la différence entre la date cible et la date actuelle
    const distance = targetDate - now;

    // Calculer les jours, heures, minutes et secondes restantes
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Afficher le décompte
    //document.getElementById("countdown").innerHTML = 
      //`Il reste ${days} jours, ${hours} heures, ${minutes} minutes et ${seconds} secondes.`;
      document.getElementById("days").innerHTML = `${days}`;
      document.getElementById("hours").innerHTML = `${hours}`;
      document.getElementById("minutes").innerHTML = `${minutes}`;
      document.getElementById("seconds").innerHTML = `${seconds}`;

    // Si le décompte est terminé, afficher un message
    if (distance < 0) {
      clearInterval(countdown);
      document.getElementById("countdown").innerHTML = "Le décompte est terminé !";
    }
  }, 1000);
