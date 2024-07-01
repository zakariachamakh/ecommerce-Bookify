import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
	{
	  _id: uuid(),
	  categoryName: "nouveautés",
	  description:
		"Découvrez les dernières fournitures de papeterie, y compris les nouveautés tendance et les meilleures ventes",
	},
	{
	  _id: uuid(),
	  categoryName: "écriture",
	  description:
		"Des stylos aux marqueurs, trouvez tous les outils d'écriture nécessaires pour vos projets scolaires ou professionnels",
	},
	{
	  _id: uuid(),
	  categoryName: "organisation",
	  description:
		"Tout pour organiser vos documents et votre espace de travail : chemises, classeurs, boîtes d'archive et plus encore",
	},
	{
	  _id: uuid(),
	  categoryName: "créativité",
	  description:
		"Explorez notre collection de fournitures pour le dessin et les loisirs créatifs, parfaites pour les artistes de tous âges",
	},
	{
	  _id: uuid(),
	  categoryName: "scolaire",
	  description:
		"Tous les indispensables pour les étudiants : cahiers, registres, ramettes de papier et autres fournitures scolaires",
	},
  ];
