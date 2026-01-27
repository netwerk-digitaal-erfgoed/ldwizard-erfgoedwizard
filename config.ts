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
  defaultBaseIri: "https://data.netwerkdigitaalerfgoed.nl/",
  primaryColor: "#0a3dfa",
  secondaryColor: "#172a59",
  homepageMarkdown: homePage,
  publishOrder: ["download"],
  icon: img,
  favIcon: favIcon,
  classConfig: {
    method: "sparql",
    endpoint: "https://graphdb.dumontierlab.com/repositories/ldwizard-humanities",
  },
  predicateConfig: {
    method: "sparql",
    endpoint: "https://graphdb.dumontierlab.com/repositories/ldwizard-humanities",
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
        "prefixLabel": "sio",
        "iri": "http://semanticscience.org/resource/"
      },
      {
        "prefixLabel": "biolink",
        "iri": "https://w3id.org/biolink/vocab/"
      },
      {
        "prefixLabel": "bl",
        "iri": "http://w3id.org/biolink/vocab/"
      },
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
        "prefixLabel": "fn",
        "iri": "http://www.w3.org/2005/xpath-functions#"
      },
      {
        "prefixLabel": "foaf",
        "iri": "http://xmlns.com/foaf/0.1/"
      },
      {
        "prefixLabel": "geo",
        "iri": "http://www.opengis.net/ont/geosparql#"
      },
      {
        "prefixLabel": "geof",
        "iri": "http://www.opengis.net/def/function/geosparql/"
      },
      {
        "prefixLabel": "geor",
        "iri": "http://www.opengis.net/def/rule/geosparql/"
      },
      {
        "prefixLabel": "gml",
        "iri": "http://www.opengis.net/ont/gml#"
      },
      {
        "prefixLabel": "gr",
        "iri": "http://purl.org/goodrelations/v1#"
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
        "prefixLabel": "pav",
        "iri": "http://purl.org/pav/"
      },
      {
        "prefixLabel": "qb",
        "iri": "http://purl.org/linked-data/cube#"
      },
      {
        "prefixLabel": "rdf",
        "iri": "http://www.w3.org/1999/02/22-rdf-syntax-ns#"
      },
      {
        "prefixLabel": "rdfa",
        "iri": "http://www.w3.org/ns/rdfa#"
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
        "prefixLabel": "sioc",
        "iri": "http://rdfs.org/sioc/ns#"
      },
      {
        "prefixLabel": "skos",
        "iri": "http://www.w3.org/2004/02/skos/core#"
      },
      {
        "prefixLabel": "sf",
        "iri": "http://www.opengis.net/ont/sf#"
      },
      {
        "prefixLabel": "void",
        "iri": "http://rdfs.org/ns/void#"
      },
      {
        "prefixLabel": "wgs84",
        "iri": "http://www.w3.org/2003/01/geo/wgs84_pos#"
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
        "iri": "https://data.netwerkdigitaalerfgoed.nl/.well-known/genid/"
      },
      {
        "prefixLabel": "bif",
        "iri": "http://www.openlinksw.com/schemas/bif#"
      },
      {
        "prefixLabel": "pnv",
        "iri": "https://w3id.org/pnv#"
      },
      {
        "prefixLabel": "graph",
        "iri": "https://data.netwerkdigitaalerfgoed.nl/ld-wizard/cidoc-crm/graphs/"
      },
      {
        "prefixLabel": "cidoc-crm",
        "iri": "http://www.cidoc-crm.org/cidoc-crm/"
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
