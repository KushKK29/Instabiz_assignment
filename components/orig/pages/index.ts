import P_contact from "./P_contact";
import P_faq from "./P_faq";
import P_gone_home from "./P_gone_home";
import P_happy_families from "./P_happy_families";
import P_how_it_works from "./P_how_it_works";
import P_index from "./P_index";
import P_puppies from "./P_puppies";
import P_puppies__copper_male from "./P_puppies__copper_male";
import P_puppies__korean_teacup_maltipoo_female from "./P_puppies__korean_teacup_maltipoo_female";
import P_puppies__korean_teacup_pomeranian_1 from "./P_puppies__korean_teacup_pomeranian_1";
import P_puppies__korean_teacup_pomeranian_male from "./P_puppies__korean_teacup_pomeranian_male";
import P_puppies__korean_teacup_pomeranian from "./P_puppies__korean_teacup_pomeranian";
import P_puppies__korean_teacup_poodle_female from "./P_puppies__korean_teacup_poodle_female";
import P_puppies__maltipoo_cavapoo_male from "./P_puppies__maltipoo_cavapoo_male";
import P_puppies__maltipoo_female_1 from "./P_puppies__maltipoo_female_1";
import P_puppies__maltipoo_female_2 from "./P_puppies__maltipoo_female_2";
import P_puppies__maltipoo_female from "./P_puppies__maltipoo_female";
import P_puppies__maltipoo_max_male from "./P_puppies__maltipoo_max_male";
import P_puppies__pomeranian_female from "./P_puppies__pomeranian_female";
import P_puppies__shitzu_female from "./P_puppies__shitzu_female";
import P_puppies__shitzu_male from "./P_puppies__shitzu_male";
import P_puppies__toy_poodle_male_female from "./P_puppies__toy_poodle_male_female";
export const pages: Record<string, {C: () => React.JSX.Element; title: string; description: string}> = {
  "contact": { C: P_contact, title: "Visit & contact | TeddyPups U.A.E.", description: "Visit TeddyPups in Downtown Dubai or get in touch on WhatsApp, by phone or email." },
  "faq": { C: P_faq, title: "Questions & answers | TeddyPups U.A.E.", description: "Answers about TeddyPups puppies: health checks and vaccinations, meeting local puppies, imported teacup breeds and delivery." },
  "gone-home": { C: P_gone_home, title: "Gone home | TeddyPups U.A.E.", description: "TeddyPups puppies who have already joined their families." },
  "happy-families": { C: P_happy_families, title: "Happy families | TeddyPups U.A.E.", description: "Real photos shared by TeddyPups families after welcoming their new puppy home." },
  "how-it-works": { C: P_how_it_works, title: "How it works | TeddyPups U.A.E.", description: "Meet a local puppy in our Downtown Dubai showroom or reserve a premium teacup breed imported for you \u2014 every step, from choosing to coming home." },
  "index": { C: P_index, title: "TeddyPups U.A.E. \u2014 Premium teacup puppies in Dubai", description: "Teddy bear and teacup puppies in Dubai. Meet local puppies in our Downtown Dubai showroom or bring home a rare breed imported from trusted breeders." },
  "puppies": { C: P_puppies, title: "Available puppies | TeddyPups U.A.E.", description: "Teacup and teddy bear puppies available now in Dubai and imported from trusted breeders \u2014 every listing shows real photos of the puppy." },
  "puppies__copper-male": { C: P_puppies__copper_male, title: "Copper, Cavapoo puppy | TeddyPups U.A.E.", description: "Meet Copper: Cavapoo, boy, 2 months old, imported. Real photos from TeddyPups U.A.E." },
  "puppies__korean-teacup-maltipoo-female": { C: P_puppies__korean_teacup_maltipoo_female, title: "Korean Teacup Maltipoo puppy (girl) | TeddyPups U.A.E.", description: "Meet this Korean Teacup Maltipoo: Korean Teacup Maltipoo, girl, 2 months old, imported. Real photos and video from TeddyPups U.A.E." },
  "puppies__korean-teacup-pomeranian-1": { C: P_puppies__korean_teacup_pomeranian_1, title: "Korean Teacup Pomeranian puppy (girl) | TeddyPups U.A.E.", description: "Meet this Korean Teacup Pomeranian: Korean Teacup Pomeranian, girl, 2 months old, imported. Real photos from TeddyPups U.A.E." },
  "puppies__korean-teacup-pomeranian-male": { C: P_puppies__korean_teacup_pomeranian_male, title: "Korean Teacup Pomeranian puppy (boy) | TeddyPups U.A.E.", description: "Meet this Korean Teacup Pomeranian: Korean Teacup Pomeranian, boy, 2 months old, imported. Real photos from TeddyPups U.A.E." },
  "puppies__korean-teacup-pomeranian": { C: P_puppies__korean_teacup_pomeranian, title: "Korean Teacup Pomeranian puppy (girl) | TeddyPups U.A.E.", description: "Meet this Korean Teacup Pomeranian: Korean Teacup Pomeranian, girl, 2 months old, imported. Real photos from TeddyPups U.A.E." },
  "puppies__korean-teacup-poodle-female": { C: P_puppies__korean_teacup_poodle_female, title: "Korean Teacup Poodle puppy (girl) | TeddyPups U.A.E.", description: "Meet this Korean Teacup Poodle: Korean Teacup Poodle, girl, 2 months old, imported. Real photos from TeddyPups U.A.E." },
  "puppies__maltipoo-cavapoo-male": { C: P_puppies__maltipoo_cavapoo_male, title: "Maltipoo & Cavapoo puppy (boy) | TeddyPups U.A.E.", description: "Meet this Maltipoo & Cavapoo: Maltipoo & Cavapoo, boy, 3 months Maltipoo & 2 months Cavapoo old, imported. Real photos and video from TeddyPups U.A.E." },
  "puppies__maltipoo-female-1": { C: P_puppies__maltipoo_female_1, title: "Maltipoo puppy (girl) | TeddyPups U.A.E.", description: "Meet this Maltipoo: Maltipoo, girl, 2.5 months old, imported. Real photos from TeddyPups U.A.E." },
  "puppies__maltipoo-female-2": { C: P_puppies__maltipoo_female_2, title: "Maltipoo puppy (girl) | TeddyPups U.A.E.", description: "Meet this Maltipoo: Maltipoo, girl, 3 months old, imported. Real photos and video from TeddyPups U.A.E." },
  "puppies__maltipoo-female": { C: P_puppies__maltipoo_female, title: "Maltipoo puppy (girl) | TeddyPups U.A.E.", description: "Meet this Maltipoo: Maltipoo, girl, 2 months old, imported. Real photos from TeddyPups U.A.E." },
  "puppies__maltipoo-max-male": { C: P_puppies__maltipoo_max_male, title: "Max, Maltipoo puppy | TeddyPups U.A.E.", description: "Meet Max: Maltipoo, boy, 3 months old, imported. Real photos and video from TeddyPups U.A.E." },
  "puppies__pomeranian-female": { C: P_puppies__pomeranian_female, title: "Pomeranian puppy (girl) | TeddyPups U.A.E.", description: "Meet this Pomeranian: Pomeranian, girl, 3 months old, imported. Real photos from TeddyPups U.A.E." },
  "puppies__shitzu-female": { C: P_puppies__shitzu_female, title: "Shih Tzu puppy (girl) | TeddyPups U.A.E.", description: "Meet this Shih Tzu: Shih Tzu, girl, 2 months old, imported. Real photos from TeddyPups U.A.E." },
  "puppies__shitzu-male": { C: P_puppies__shitzu_male, title: "Shih Tzu puppy (boy) | TeddyPups U.A.E.", description: "Meet this Shih Tzu: Shih Tzu, boy, 2 months old, imported. Real photos from TeddyPups U.A.E." },
  "puppies__toy-poodle-male-female": { C: P_puppies__toy_poodle_male_female, title: "Toy Poodle puppy (boy & girl) | TeddyPups U.A.E.", description: "Meet this Toy Poodle: Toy Poodle, boy & girl, 2 months old, imported. Real photos from TeddyPups U.A.E." },
};
