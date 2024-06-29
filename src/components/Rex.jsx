import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import semestre from '../assets/projects/semestre.png';

const Rex = () => {
    const [isVisible, setIsVisible] = useState(false);

  // Simuler le changement de visibilité
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 400);  // Délai avant que les éléments deviennent visibles

    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
        <div class="container">  
                    <motion.img
                        initial={{ opacity: 0, y: 50 }}  // Commence avec l'opacité à 0 et légèrement décalé sur l'axe Y
                        animate={isVisible ? { opacity: 1 } : {}}   // Anime à l'opacité 1 et revient à la position Y originale
                        whileInView={{ opacity: 1, y: 0 }} // Garantit que l'élément reste visible et à sa place
                        viewport={{ once: true, amount: 0.4 }} // L'animation se déclenche quand 80% de l'élément est visible
                        transition={{ duration: 0.5, ease: "easeIn" }}
                        src={semestre} // Remplacez par le chemin de votre image
                        alt="Web Design"
                        className="image-block"
                        />  
                    <motion.div
                        className="text-block"
                        initial={{ opacity: 0, y: 50 }}  // Commence avec l'opacité à 0 et légèrement décalé sur l'axe Y
                        animate={isVisible ? { opacity: 1 } : {}}   // Anime à l'opacité 1 et revient à la position Y originale
                        whileInView={{ opacity: 1, y: 0 }} // Garantit que l'élément reste visible et à sa place
                        viewport={{ once: true, amount: 0.4 }} // L'animation se déclenche quand 80% de l'élément est visible
                        transition={{ duration: 0.5, ease: "easeIn" }}>
                        <h1 className='titre1'>Retour d'expérience de la période entreprise lors du Semestre8</h1>
                        <h2 className='titre2'>Ecole : ENSIM | Le Mans,France</h2>
                        <h2 className='titre2'>Entreprise : OPmobility | Domaine: Reservoir à Hydrogène | Compiegne,France</h2>
                        <p>2024</p>
                        <br />
                        <p>Dans l'entreprise, je suis chargée de développer le logiciel industriel de l'entreprise en C++ et C#. 
                        Et cela n'implique pas seulement le code mais plusieurs autres aspects afin d'avoir une expérience complète.</p> 
                        <br />
                            <h3 className='titre3'>Module 1 : Conduite de Projet</h3>
                        <br />
                        <ul class="skill-liste">
                            <li><b class="fas fa-user"></b>  Normes, Certifications et Démarche qualité : ISO 9001</li>
                        </ul>
                        <p>On utilise cette norme pour garantir la qualité des produits de l'entreprise afin de prouver l'aspect règlementaire.</p>
                        <p>La démarche qualité qu'on utilise est la suivante : Evaluation des risques - Mise en oeuvre des mesures sécuritaires - Audits. 
                            Pour le moment tout ce qui concerne les coûts je ne suis pas explicitement impliquée.</p> 
                            <br />
                        <ul class="skill-liste">
                            <li><b class="fas fa-user"></b> Recherche de solutions & Présentation de livrables</li>
                        </ul>
                        <p>Ici, face à un problème de bonne pratique lors de la commercialisation du logiciel, il fallait utiliser des méthodes plus modernes.
                            J'ai donc décidé de mettre sur pied un installateur pour le logiciel en prenant en compte tous les paramètres afin que le client l'installer
                            sans notre intervention à chaque fois.
                        </p>
                        <p>J'ai également contacté une entreprise de certification pour attester de la fiabilité.</p>

                        <br />
                            <h3 className='titre3'>Module 2 : Sécurité du système d'information</h3>
                        <br />
                        <p> <strong>Pratique de sécurité interne :</strong> Utilisation de VPN lors des télétravails, Modification des mots de passe chaque trimestre,
                        Formation cybersécurité (phishing, attaques réseaux etc.), etc... </p>
                        <br />
                        <ul class="skill-liste">
                            <li><b class="fas fa-user"></b> Sécurisation du logiciel : IEC 62443</li>
                        </ul>
                        <p>Cette partie m'a été totalement confiée et pour le faire j'ai suivi la démarche qualité décrite plus haut.</p>
                        <p>IEC 62443 est une norme spécifique à l'IOT (Logiciel) dans le domaine industriel. J'ai contacté une entité qui délivre cette certification
                            et nous travaillons avec elle pour assurer la sécurité avec un audit à chaque étape.
                        </p>
                        <p><strong>Pratiques :</strong> Test d'infiltration (Pentesting)</p>

                        <br />
                            <h3 className='titre3'>Module 3 : Technique</h3>
                        <br />
                        <ul class="skill-liste">
                            <li><b class="fas fa-user"></b> Le developpement du logiciel suit son cours comme présenté au semestre précédent.</li>
                            <li><b class="fas fa-user"></b>Gestion de licences avec l'outil FLEXLM</li>
                            <li><b class="fas fa-user"></b> Application des concepts vu en IHM à l'école</li>
                        </ul>
                    </motion.div>
        </div>
    </> 
  );
};

export default Rex;
