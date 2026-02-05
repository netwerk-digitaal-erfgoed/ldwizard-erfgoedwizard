import WizardConfig, { ColumnRefinement, PrefixEntry } from "@pldn/ldwizard/types/WizardConfig";
import { getUriOfSearchTerm, getRefinementList } from "./termennetwerk";

// @ts-ignore
import img from "./ndelogo.png";

// @ts-ignore
import favIcon from "./favicon.png";

// @ts-ignore
import homePage from "./homePage.md";

async function initSources() {
  var sourceList = await getRefinementList();

  globalThis.wizardConfig.columnRefinements.push(...sourceList);
}

const wizardConfig: WizardConfig = {
  appName: "LDWizard - Erfgoed",
  defaultBaseIri: "https://example.org/",
  primaryColor: "#0a3dfa",
  secondaryColor: "#172a59",
  homepageMarkdown: homePage,
  publishOrder: ["download"],
  icon: img,
  favIcon: favIcon,
  classConfig: {
    method: "sparql",
    //endpoint: "https://graphdb.dumontierlab.com/repositories/ldwizard-humanities",
    endpoint: "https://example.org/sparql/"
  },
  predicateConfig: {
    method: "sparql",
    //endpoint: "https://graphdb.dumontierlab.com/repositories/ldwizard-humanities",
    endpoint: "https://example.org/sparql/"
  },
//  dataplatformLink: "https://data.netwerkdigitaalerfgoed.nl/",
  repositoryLink: "https://github.com/netwerk-digitaal-erfgoed/LDWizard-ErfgoedWizard",
  // getAllowedPrefixes: async () => {
  //   const response = await fetch("https://api.data.netwerkdigitaalerfgoed.nl/datasets/ld-wizard/sdo/prefixes");
  //   if (response.ok) {
  //     const prefixes: PrefixEntry[] = await response.json();
  //     return prefixes;
  //   }
  //   console.error("Prefixes retrieval failed");
  //   return [];
  // },
  getAllowedPrefixes: async () => {
    const prefixes: PrefixEntry[] = [
      {
        "prefixLabel": "wd",
        "iri": "http://www.wikidata.org/entity/"
      },
      {
        "prefixLabel": "dbo",
        "iri": "http://dbpedia.org/ontology/"
      },
      {
        "prefixLabel": "dbp",
        "iri": "http://dbpedia.org/property/"
      },
      {
        "prefixLabel": "dc",
        "iri": "http://purl.org/dc/elements/1.1/"
      },
      {
        "prefixLabel": "dcat",
        "iri": "http://www.w3.org/ns/dcat#"
      },
      {
        "prefixLabel": "dct",
        "iri": "http://purl.org/dc/terms/"
      },
      {
        "prefixLabel": "foaf",
        "iri": "http://xmlns.com/foaf/0.1/"
      },
      {
        "prefixLabel": "owl",
        "iri": "http://www.w3.org/2002/07/owl#"
      },
      {
        "prefixLabel": "prov",
        "iri": "http://www.w3.org/ns/prov#"
      },
      {
        "prefixLabel": "rdf",
        "iri": "http://www.w3.org/1999/02/22-rdf-syntax-ns#"
      },
      {
        "prefixLabel": "rdfs",
        "iri": "http://www.w3.org/2000/01/rdf-schema#"
      },
      {
        "prefixLabel": "schema",
        "iri": "https://schema.org/"
      },
      {
        "prefixLabel": "sdo",
        "iri": "https://schema.org/"
      },
      {
        "prefixLabel": "skos",
        "iri": "http://www.w3.org/2004/02/skos/core#"
      },
      {
        "prefixLabel": "void",
        "iri": "http://rdfs.org/ns/void#"
      },
      {
        "prefixLabel": "xsd",
        "iri": "http://www.w3.org/2001/XMLSchema#"
      },
      {
        "prefixLabel": "yago",
        "iri": "http://yago-knowledge.org/resource/"
      },
      {
        "prefixLabel": "bnode",
        "iri": "https://example.org/.well-known/genid/"
      }
    ]
    return prefixes;
  },
  columnRefinements: [
    {
      label: "Verwerk als URI/IRI",
      type: "single",
      description:
        "In this transformation the returned value should be an IRI, this can be applied to the 'IRIs' column in the example.csv file",
      transformation: async (term: string) => {
        return `${term}`;
      },
      yieldsIri: true,
      keepOriginalValue: {
        keepValue: false,
        owlSameAsRelationship: false,
      },
    },
  ],
};

export default globalThis.wizardConfig = wizardConfig;
initSources();
