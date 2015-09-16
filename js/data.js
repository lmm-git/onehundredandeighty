/*
 * NOTE: Please update semesterManager in js/logic.js as well, after updating this file
 *
 * This file must only be edited manually!
 * Remember to update 'Klubsprecher' and 'Studium Plus'!
 */

/*
 * Data structure for a course:
 *    kurz: Short text for the course. Make sure, it fits in the browser on 1024px
 *    lehrform: "Seminar" or "Projekt" or "Vorlesung"
 *    modul: "Vertiefungsgebiete" is what you want in most cases here
 *    semester: semester string: (WS|SS)[0-9]{2}, e.g. WS11
 *    pflicht: whether this course must be chosen or not
 *    empfohlen: integer indicating in which course this semester is recommended
 *    vertiefung: array containing strings for the vertiefungsgebiete, "BPET"/"HCT"/"IST"/"OSIS"/"SAMT" alphabetically!
 *    cp: how much credit points you get for this course
 *    vorher: identifier/key of the course/s which must be taken before the current one, e.g. 'mathematik1'
 *    dozent: self explaining
 *    nameLV: long name
 */

var ws10_11 = "WS10/11",
    ss11    = "SS11",
    ws11_12 = "WS11/12",
    ss12    = "SS12",
    ws12_13 = "WS12/13",
    ss13    = "SS13",
    ws13_14 = "WS13/14",
    ss14	= "SS14",
    ws14_15	= "WS14/15",
    ss15	= "SS15",
    ws15_16 = "WS15/16",
    ss16	= "SS16";

var OSIS = "OSIS",
	SAMT = "SAMT",
	IST  = "IST",
	HCT  = "HCT",
	BPET = "BPET";

var data = {
	dreidstadtmodelle: {
		kurz: "3D-<br />Stadtmodelle",
		lehrform: ["Seminar"],
		modul: ["Vertiefungsgebiete"],
		semester: [ws14_15],
		pflicht: false,
		empfohlen: "",
		vertiefung: [HCT, OSIS, SAMT],
		cp: 6,
		vorher: [],
		dozent: ["Prof. Dr. Jürgen Döllner", "Benjamin Hagedorn"],
		nameLV: "Seminar Konstruktion virtueller 3D-Stadtmodelle"
	},
	advancedmodularity: {
		kurz: "Advanced<br />Modularity",
		lehrform: ["Seminar"],
		modul: ["Vertiefungsgebiete"],
		semester: [ss12],
		pflicht: false,
		empfohlen: "",
		vertiefung: [OSIS, SAMT],
		cp: 3,
		vorher: [],
		dozent: ["Prof. Dr. Robert Hirschfeld"],
		nameLV: "Advanced Modularity"
	},
	algorithmischegeometrie: {
		kurz: "Algorithmische<br />Geometrie",
		lehrform: ["Seminar", "Projekt"],
		modul: ["Vertiefungsgebiete"],
		semester: [ss12],
		pflicht: false,
		empfohlen: "",
		vertiefung: [HCT, SAMT],
		cp: 6,
		vorher: [],
		dozent: ["Prof. Dr. Jürgen Döllner"],
		nameLV: "Algorithmische Geometrie"
	},
	android: {
		kurz: "Android",
		lehrform: ["Seminar"],
		modul: ["Vertiefungsgebiete"],
		semester: [ws10_11],
		pflicht: false,
		empfohlen: "",
		vertiefung: [OSIS],
		cp: 3,
		vorher: [],
		dozent: ["Prof. Dr. Felix Naumann", "Alexander Albrecht"],
		nameLV: "Mobile Computing with Android"
	},
	angewandtelogik: {
		kurz: "Angewandte<br />Logik",
		lehrform: ["Vorlesung"],
		modul: ["Vertiefungsgebiete"],
		semester: [ss11, ss12],
		pflicht: false,
		empfohlen: "",
		vertiefung: [BPET, HCT],
		cp: 6,
		vorher: [],
		dozent: ["Prof. Dr. Schaub"],
		nameLV: "Angewandte Logik"
	},
	aop: {
		kurz: "AOP",
		lehrform: ["Seminar"],
		modul: ["Vertiefungsgebiete"],
		semester: [ws10_11, ws11_12, ss15],
		pflicht: false,
		empfohlen: "",
		vertiefung: [OSIS, SAMT],
		cp: 3,
		vorher: [],
		dozent: ["Prof. Dr. Robert Hirschfeld"],
		nameLV: "Aspektorientierte Programmierung"
	},
	beauty: {
		kurz: "Beauty is<br />our Business",
		lehrform: ["Seminar"],
		modul: ["Vertiefungsgebiete"],
		semester: [ss11, ss12],
		pflicht: false,
		empfohlen: "",
		vertiefung: [OSIS, HCT],
		cp: 3,
		vorher: ["dbs1", "dbs2"],
		dozent: ["Prof. Dr. Felix Naumann"],
		nameLV: "Beauty is our Business"
	},
	bigdataanalytics: {
		kurz: "BD Analytics",
		lehrform: ["Vorlesung", "Übung"],
		modul: ["Vertiefungsgebiete"],
		semester: [ws15_16],
		pflicht: false,
		empfohlen: "",
		vertiefung: [BPET, OSIS],
		cp: 6,
		vorher: [],
		dozent: "Prof. Dr. Emmanuel Müller",
		nameLV: "Big Data Analytics"
	},
	bpmninthecloud : {
		kurz: "BPMN in the cloud:<br />tBPMN & effektif",
		lehrform: ["Seminar"],
		modul: ["Vertiefungsgebiete"],
		semester: [ss14, ss15],
		pflicht: false,
		empfohlen: "",
		vertiefung: [OSIS, BPET],
		cp: 6,
		vorher: [],
		dozent: ["Prof. Dr. Mathias Weske", "Marcin Hewelt", "Luise Pufahl"],
		nameLV: "BPMN in the cloud: tBPMN & effektif"
	},
	beautifuldata: {
		kurz: "Beautiful<br />data",
		lehrform: ["Seminar"],
		modul: ["Vertiefungsgebiete"],
		semester: [ws13_14],
		pflicht: false,
		empfohlen: "",
		vertiefung: [OSIS, HCT],
		cp: 3,
		vorher: ["dbs1"],
		dozent: ["Prof. Dr. Felix Naumann"],
		nameLV: "Beautiful Data"
	},
	bs1: {
		kurz: "BS I",
		lehrform: ["Vorlesung"],
		modul: ["Softwarebasissysteme"],
		semester: [ws10_11, ws11_12, ws12_13, ws13_14, ws14_15, ws15_16],
		pflicht: true,
		empfohlen: 3,
		vertiefung: [""],
		cp: 6,
		vorher: [],
		dozent: ["Prof. Dr. Andreas Polze"],
		nameLV: "Betriebssysteme I"
	},
	bs2: {
		kurz: "BS II",
		lehrform: ["Vorlesung", "Übung"],
		modul: ["Vertiefungsgebiete"],
		semester: [ss11, ss13, ss14, ss15],
		pflicht: false,
		empfohlen: "",
		vertiefung: [OSIS],
		cp: 6,
		vorher: ["bs1"],
		dozent: ["Prof. Dr. Andreas Polze"],
		nameLV: "Betriebssysteme II"
	},
	cloud: {
		kurz: "Cloud<br />Computing",
		lehrform: ["Seminar"],
		modul: ["Vertiefungsgebiete"],
		semester: [ws10_11],
		pflicht: false,
		empfohlen: "",
		vertiefung: [OSIS],
		cp: 3,
		vorher: [],
		dozent: ["Prof. Dr. Andreas Polze", "Dr. Peter Tröger"],
		nameLV: "Industrieseminar Cloud Computing"
	},
	codingexercisesinlearningenvironments: {
		kurz: "Coding Exercises in<br />Learning Environments",
		lehrform: ["Seminar"],
		modul: ["Vertiefungsgebiete"],
		semester: [ws14_15],
		pflicht: false,
		empfohlen: "",
		vertiefung: [IST, OSIS, SAMT],
		cp: 6,
		vorher: [],
		dozent: ["Prof. Dr. Christoph Meinel", "Jan Renz", "Thomas Staubitz"],
		nameLV: "Hands-on Coding Exercises in Large Scale Learning Environments"
	},
	collaboration: {
		kurz: "Collaboration<br />software",
		lehrform: ["Seminar", "Projekt"],
		modul: ["Vertiefungsgebiete"],
		semester: [ws10_11],
		pflicht: false,
		empfohlen: "",
		vertiefung: [IST],
		cp: 6,
		vorher: [],
		dozent: ["Prof. Dr. Christoph Meinel", "Raja Gumienny", "Christian Willems", "Matthias Quasthoff", "Lutz Gericke"],
		nameLV: "User-centered development of collaboration software"
	},
	complexeventprocessing: {
		kurz: "Complex Event<br />Processing",
		lehrform: ["Seminar"],
		modul: ["Vertiefungsgebiete"],
		semester: [ws13_14],
		pflicht: false,
		empfohlen: "",
		vertiefung: [BPET, OSIS, SAMT],
		cp: 6,
		vorher: [],
		dozent: ["Prof. Dr. Mathias Weske", "Nico Herzberg", "Matthias Kunze"],
		nameLV: "A Platform for Complex Event Processing"
	},
	copsandrobbers: {
		kurz: "Cops &<br />Robbers",
		lehrform: ["Seminar", "Projekt"],
		modul: ["Vertiefungsgebiete"],
		semester: [ss12, ss13, ss14, ss15],
		pflicht: false,
		empfohlen: "",
		vertiefung: [IST, OSIS, SAMT],
		cp: 6,
		vorher: [],
		dozent: ["Prof. Dr. Christoph Meinel", "Dr. Feng Cheng"],
		nameLV: "Cops & Robbers"
	},
	crowdsourcingopenhpi: {
		kurz: "Crowdsourcing<br />openHPI",
		lehrform: ["Seminar", "Projekt"],
		modul: ["Vertiefungsgebiete"],
		semester: [ss14],
		pflicht: false,
		empfohlen: "",
		vertiefung: [IST, HCT, OSIS],
		cp: 6,
		vorher: [],
		dozent: ["Prof. Dr. Christoph Meinel", "Christian Willems"],
		nameLV: "Crowdsourcing openHPI"
	},
	dbs1: {
		kurz: "DBS I",
		lehrform: ["Vorlesung", "Übung"],
		modul: ["Softwarebasissysteme", "Vertiefungsgebiete"],
		semester: [ss11, ss12, ss13, ss14, ss15],
		pflicht: false,
		empfohlen: "",
		vertiefung: [OSIS],
		cp: 6,
		vorher: [],
		dozent: ["Prof. Dr. Felix Naumann"],
		nameLV: "Datenbanksysteme I"
	},
	dbs2: {
		kurz: "DBS II",
		lehrform: ["Vorlesung", "Übung"],
		modul: ["Vertiefungsgebiete"],
		semester: [ws10_11, ws11_12, ws13_14, ws14_15, ws15_16],
		pflicht: false,
		empfohlen: "",
		vertiefung: [BPET, OSIS],
		cp: 6,
		vorher: ["dbs1"],
		dozent: ["Prof. Dr. Felix Naumann"],
		nameLV: "Datenbanksysteme II"
	},
	designthinkingeinfuehrung: {
		kurz: "Einführung<br />Design Thinking",
		lehrform: ["Seminar", "Projekt"],
		modul: ["Softskills"],
		semester: [ss11, ws11_12, ss12, ws12_13, ss13, ws13_14, ss14, ws14_15, ss15, ws15_16],
		pflicht: false,
		empfohlen: "",
		vertiefung: [""],
		cp: 3,
		vorher: [],
		dozent: ["Prof. Ulrich Weinberg", "Dr. Claudia Nicolai"],
		nameLV: "Einführung in das Design Thinking"
	},
	designthinkingbasic: {
		kurz: "D-School<br />Basic Track",
		lehrform: ["Seminar", "Projekt"],
		modul: ["Softskills"],
		semester: [ss11, ws11_12, ss12, ws12_13, ss13, ws13_14, ss14, ws14_15, ss15, ws15_16],
		pflicht: false,
		empfohlen: "",
		vertiefung: [""],
		cp: 6,
		vorher: [],
		dozent: ["Prof. Ulrich Weinberg", "Dr. Claudia Nicolai"],
		nameLV: "D-School Basic Track"
	},
	designthinkingadvanced: {
		kurz: "D-School<br />Advanced Track",
		lehrform: ["Seminar", "Projekt"],
		modul: ["Softskills"],
		semester: [ws11_12, ss12, ws12_13, ss13, ws13_14, ss14, ws14_15, ss15, ws15_16],
		pflicht: false,
		empfohlen: "",
		vertiefung: [""],
		cp: 6,
		vorher: [],
		dozent: ["Prof. Ulrich Weinberg", "Dr. Claudia Nicolai"],
		nameLV: "D-School Advanced Track"
	},
	dienstbasiertewebarchitekturen: {
		kurz: "Dienstbasierte<br />Webarchitekturen",
		lehrform: ["Seminar"],
		modul: ["Vertiefungsgebiete"],
		semester: [ss14],
		pflicht: false,
		empfohlen: "",
		vertiefung: [BPET, IST, OSIS],
		cp: 6,
		vorher: [],
		dozent: ["Prof. Dr. Christoph Meinel", "Dr. Michael Menzel"],
		nameLV: "Dienstbasierte Webarchitekturen mit HTML5 und REST"
	},
	einfuehrungindiealgorithmik: {
		kurz: "Algorithmik<br />Einführung",
		lehrform: ["Vorlesung", "Übung"],
		modul: ["Vertiefungsgebiete"],
		semester: [ws15_16],
		pflicht: false,
		empfohlen: "",
		vertiefung: [IST, OSIS, SAMT],
		cp: 6,
		vorher: [], //mathe1?
		dozent: ["Prof. Dr. Tobias Friedrich", "Dr. Pascal Lenzner"],
		nameLV: "Einführung in die Algorithmik"
	},
	enterprise: {
		kurz: "Basics<br />Enterprise Software",
		lehrform: ["Vorlesung", "Übung"],
		modul: ["Vertiefungsgebiete"],
		semester: [ws10_11],
		pflicht: false,
		empfohlen: "",
		vertiefung: [BPET],
		cp: 3,
		vorher: [],
		dozent: ["Dr. Alexander Zeier", "Oleksandr Panchenko", "Vadym Borovski"],
		nameLV: "Basics of On-premise and On-demand Enterprise Software"
	},
	enterpriseapplications: {
		kurz: "Enterprise<br />Apps",
		lehrform: ["Seminar"],
		modul: ["Vertiefungsgebiete"],
		semester: [ss13],
		pflicht: false,
		empfohlen: "",
		vertiefung: [BPET],
		cp: 6,
		vorher: [],
		dozent: ["Dr. Jürgen Müller", "Martin Lorenz"],
		nameLV: "Enterprise Applications: Business Processes and Programming Model"
	},
	enterprisesoftwaresystems: {
		kurz: "Enterprise Software<br />Concepts",
		lehrform: ["Seminar"],
		modul: ["Vertiefungsgebiete"],
		semester: [ss14],
		pflicht: false,
		empfohlen: "",
		vertiefung: [BPET, OSIS],
		cp: 6,
		vorher: [],
		dozent: ["Dr. Matthias Uflacker", "Dr. Jürgen Müller"],
		nameLV: "Enterprise Software Systems - Programming Concepts and Application Characteristics"
	},
	eworld: {
		kurz: "eWorld",
		lehrform: ["Seminar", "Projekt"],
		modul: ["Vertiefungsgebiete"],
		semester: [ws10_11],
		pflicht: false,
		empfohlen: "",
		vertiefung: [IST],
		cp: 6,
		vorher: [],
		dozent: ["Prof. Dr. Christoph Meinel", "Björn Schünemann"],
		nameLV: "eWorld-Open Source Verkehrssimulations-Tool"
	},
	fachenglisch1: {
		kurz: "Fachenglisch<br />Level 1",
		lehrform: ["Seminar"],
		modul: ["Softskills"],
		semester: [ws10_11, ss11, ws11_12, ss12, ws12_13, ss13, ws13_14, ss14, ws14_15, ss15, ws15_16],
		pflicht: false,
		empfohlen: "",
		vertiefung: [""],
		cp: 3,
		vorher: [],
		dozent: ["David Meier"],
		nameLV: "Fachspezifisches Englisch (Level I)"
	},
	fachenglisch2: {
		kurz: "Fachenglisch<br />Level 2",
		lehrform: ["Seminar"],
		modul: ["Softskills"],
		semester: [ws10_11, ss11, ws11_12, ss12, ws12_13, ss13, ws13_14, ss14, ws14_15, ss15, ws15_16],
		pflicht: false,
		empfohlen: "",
		vertiefung: [""],
		cp: 3,
		vorher: [],
		dozent: ["David Meier"],
		nameLV: "Fachspezifisches Englisch (Level II)"
	},
	foundationsgraphtransformation: {
		kurz: "Graph Transformation<br/>Systems",
		lehrform: ["Semianr"],
		modul: ["Vertiefungsgebiete"],
		semester: [ws14_15],
		pflicht: false,
		empfohlen: "",
		vertiefung: [SAMT],
		cp: 3,
		vorher: [],
		dozent: ["Prof.Dr. Holger Giese", "Johannes Dyck"],
		nameLV: "Formal Foundations of Graph Transformation Systems"
	},
	game: {
		kurz: "Game<br />Programming",
		lehrform: ["Seminar", "Projekt"],
		modul: ["Vertiefungsgebiete"],
		semester: [ws10_11, ws11_12, ws12_13, ws13_14, ws14_15],
		pflicht: false,
		empfohlen: "",
		vertiefung: [HCT, OSIS, SAMT],
		cp: 6,
		vorher: ["grafik1"],
		dozent: ["Prof. Dr. Jürgen Döllner", "Amir Semmo", "Matthias Trapp"],
		nameLV: "Game Programming"
	},
	gds: {
		kurz: "GdS",
		lehrform: ["Vorlesung", "Übung"],
		modul: ["Grundlagen IT-Systems Engineering"],
		semester: [ws10_11, ws11_12, ws12_13, ws13_14, ws14_15, ws15_16],
		pflicht: true,
		empfohlen: 1,
		vertiefung: [""],
		cp: 6,
		vorher: [],
		dozent: ["Dr. Ralf Wollowski"],
		nameLV: "Grundlagen digitaler Systeme"
	},
	grafik1: {
		kurz: "Computer-<br />grafik I",
		lehrform: ["Vorlesung", "Übung"],
		modul: ["Vertiefungsgebiete", "Softwarebasissysteme"],
		semester: [ss11, ss12, ss13, ss14, ss15, ws15_16],
		pflicht: false,
		empfohlen: "",
		vertiefung: [HCT],
		cp: 6,
		vorher: ["mathematik1", "pt1"],
		dozent: ["Prof. Dr. Jürgen Döllner"],
		nameLV: "3D-Computergrafik I"
	},
	grafik2: {
		kurz: "Computer-<br />grafik II",
		lehrform: ["Vorlesung"],
		modul: ["Vertiefungsgebiete"],
		semester: [ws10_11, ws11_12, ws12_13, ws13_14, ws14_15],
		pflicht: false,
		empfohlen: "",
		vertiefung: [HCT, SAMT],
		cp: 6,
		vorher: ["grafik1"],
		dozent: ["Prof. Dr. Jürgen Döllner"],
		nameLV: "Computergrafik II"
	},
	graphicslibraries: {
		kurz: "Graphics<br />Libraries",
		lehrform: ["Seminar", "Projekt"],
		modul: ["Vertiefungsgebiete"],
		semester: [ss11],
		pflicht: false,
		empfohlen: "",
		vertiefung: [HCT, SAMT],
		cp: 6,
		vorher: ["mathematik1", "pt1"],
		dozent: ["Prof. Dr. Jürgen Döllner", "Juri Engel", "Matthias Trapp", "Tassilo Glander", "Martin Beck"],
		nameLV: "Multimedia/Graphics Library & System"
	},
	grafikprogrammierung: {
		kurz: "Grafik-<br />Programmierung",
		lehrform: ["Seminar"],
		modul: ["Vertiefungsgebiete"],
		semester: [ss13, ss14, ss15],
		pflicht: false,
		empfohlen: "",
		vertiefung: [HCT, SAMT],
		cp: 6,
		vorher: [],
		dozent: ["Prof. Dr. Jürgen Döllner", "Daniel Limberger"],
		nameLV: "Grafikprogrammierung mit OpenGL und C++"
	},
	hciproject: {
		kurz: "HCI Project<br />Seminar",
		lehrform: ["Seminar", "Projekt"],
		modul: ["Vertiefungsgebiete"],
		semester: [ws10_11, ws11_12, ss12, ws12_13, ss13, ws13_14, ss14, ws14_15, ss15, ws15_16],
		pflicht: false,
		empfohlen: "",
		vertiefung: [HCT, SAMT],
		cp: 6,
		vorher: [],
		dozent: ["Prof. Dr. Patrick Baudisch", "Christian Holz"],
		nameLV: "HCI Project Seminar mit wechselnden Themen"
	},
	hciundergrad: {
		kurz: "HCI<br />Undergrad",
		lehrform: ["Projekt"],
		modul: ["Vertiefungsgebiete"],
		semester: [ss11],
		pflicht: false,
		empfohlen: "",
		vertiefung: [HCT],
		cp: 6,
		vorher: [],
		dozent: ["Prof. Dr. Patrick Baudisch"],
		nameLV: "HCI Undergrad Project: 3D Games and Interactive Floors"
	},
	hci1: {
		kurz: "HCI I",
		lehrform: ["Vorlesung"],
		modul: ["Softwarebasissysteme", "Vertiefungsgebiete"],
		semester: [ws10_11, ws11_12, ws12_13, ws13_14, ws14_15, ws15_16],
		pflicht: false,
		empfohlen: "",
		vertiefung: [HCT],
		cp: 6,
		vorher: [],
		dozent: ["Prof. Dr. Patrick Baudisch"],
		nameLV: "HCI1: Designing Interactive Systems"
	},
	hci2: {
		kurz: "HCI II",
		lehrform: ["Vorlesung"],
		modul: ["Vertiefungsgebiete"],
		semester: [ss11, ss12, ss13, ss14, ss15],
		pflicht: false,
		empfohlen: "",
		vertiefung: [HCT, SAMT, OSIS],
		cp: 6,
		vorher: [],
		dozent: ["Prof. Dr. Patrick Baudisch"],
		nameLV: "HCI: Building Interactive Devices and Computer Vision"
	},
	history: {
		kurz: "History",
		lehrform: ["Seminar"],
		modul: ["Vertiefungsgebiete"],
		semester: [ss11],
		pflicht: false,
		empfohlen: "",
		vertiefung: [SAMT],
		cp: 3,
		vorher: [],
		dozent: ["Prof. Dr. Robert Hirschfeld", "Malte Appeltauer", "Felix Geller"],
		nameLV: "History of Programming Languages"
	},
	identitätsmanagement: {
		kurz: "Identitäts-<br />management",
		lehrform: ["Seminar", "Projekt"],
		modul: ["Vertiefungsgebiete"],
		semester: [ws15_16],
		pflicht: false,
		empfohlen: "",
		vertiefung: [IST, OSIS, SAMT],
		cp: 6,
		vorher: [],
		dozent: ["Prof. Dr. Christoph Meinel"],
		nameLV: "Identitätsmanagement"
	},
	imagevideoprocessing: {
		kurz: "Image & Video<br />Processing",
		lehrform: ["Seminar"],
		modul: ["Vertiefungsgebiete"],
		semester: [ss14],
		pflicht: false,
		empfohlen: "",
		vertiefung: [HCT, SAMT],
		cp: 6,
		vorher: [],
		dozent: ["Prof. Dr. Jürgen Döllner", "Dr. Matthias Trapp", "Amir Semmo"],
		nameLV: "Image & Video Processing"
	},
	internetsecurity: {
		kurz: "Internet–<br />Security",
		lehrform: ["Vorlesung", "Übung"],
		modul: ["Vertiefungsgebiete"],
		semester: [ws10_11, ws11_12, ws12_13, ws13_14, ws14_15, ws15_16],
		pflicht: false,
		empfohlen: "",
		vertiefung: [IST, OSIS],
		cp: 6,
		vorher: [],
		dozent: ["Prof. Dr. Christoph Meinel"],
		nameLV: "Internet-Security - Weaknesses and Targets"
	},
	ipv6practices: {
		kurz: "IPv6",
		lehrform: ["Seminar"],
		modul: ["Vertiefungsgebiete"],
		semester: [ws12_13],
		pflicht: false,
		empfohlen: "",
		vertiefung: [IST],
		cp: 3,
		vorher: [],
		dozent: ["Prof. Dr. Christoph Meinel", "Ahmad Alsa'deh"],
		nameLV: "IPv6 Best Practices"
	},
	itimgesundheitswesen: {
		kurz: "IT im<br />Gesundheitswesen",
		lehrform: ["Seminar"],
		modul: ["Vertiefungsgebiete"],
		semester: [ss14],
		pflicht: false,
		empfohlen: "",
		vertiefung: [HCT, IST, OSIS],
		cp: 3,
		vorher: [],
		dozent: ["Prof. Dr. Christoph Meinel", "Nuhad Shaabani"],
		nameLV: "IT im Gesundheitswesen"
	},
	klubsprecher: {
		kurz: "Klubsprecher",
		lehrform: [""],
		modul: ["Softskills"],
		semester: [ws10_11, ss11, ws11_12, ss12, ws12_13, ss13, ws13_14, ss14, ws14_15, ss15],
		pflicht: false,
		empfohlen: "",
		vertiefung: [""],
		cp: 3,
		vorher: [],
		dozent: [],
		nameLV: "Klubsprechertätigkeit über mindestens zwei Semester"
	},
  knowledgemining:
  {
    kurz: "Knowledge<br>Mining",
		lehrform: ["Seminar"],
		modul: ["Vertiefungsgebiete"],
		semester: [ss15],
		pflicht: false,
		empfohlen: "",
		vertiefung: [BPET, IST, OSIS],
		cp: 6,
		vorher: [],
		dozent: ["Dr. Harald Sack"],
		nameLV: "Knowledge Mining"
  },
	kuenstlicheintelligenz: {
		kurz: "KI",
		lehrform: ["Vorlesung"],
		modul: ["Vertiefungsgebiete"],
		semester: [ws10_11, ws11_12, ws12_13],
		pflicht: false,
		empfohlen: "",
		vertiefung: [BPET, IST, OSIS],
		cp: 6,
		vorher: [],
		dozent: ["Prof. Dr. Schaub"],
		nameLV: "Einführung in die Künstliche Intelligenz"
	},
  lerntechniken: {
		kurz: "Professionalisierte Lerntechniken",
		lehrform: ["Seminar"],
		modul: ["Softskills"],
		semester: [ws13_14, ws14_15, ss15, ws15_16],
		pflicht: false,
		empfohlen: "",
		vertiefung: [""],
		cp: 3,
		vorher: [],
		dozent: ["Dr. Rolf Specht"],
		nameLV: "Professionalisierte Lerntechniken"
  },
  linkeddatamashup: {
  	kurz: "Linked Data<br/>Mashup",
		lehrform: ["Seminar"],
		modul: ["Vertiefungsgebiete"],
		semester: [ws14_15],
		pflicht: false,
		empfohlen: "",
		vertiefung: [IST, OSIS, SAMT],
		cp: 6,
		vorher: [],
		dozent: ["Dr. Harald Sack", "Magnus Knuth", "Jörg Waitelonis"],
		nameLV: "Linked Data Mashup Programming"
  },
	mainframe: {
		kurz: "Mainframe<br />Computing",
		lehrform: ["Seminar"],
		modul: ["Vertiefungsgebiete"],
		semester: [ss12],
		pflicht: false,
		empfohlen: "",
		vertiefung: [BPET, IST, OSIS],
		cp: 3,
		vorher: [],
		dozent: ["Prof. Dr. Andreas Polze"],
		nameLV: "Mainframe Computing (Blockseminar)"
	},
	mathematik1: {
		kurz: "Mathematik I",
		lehrform: ["Vorlesung", "Übung"],
		modul: ["Mathematische und theoretische Grundlagen"],
		semester: [ws10_11, ws11_12, ws12_13, ws13_14, ws14_15, ws15_16],
		pflicht: true,
		empfohlen: 1,
		vertiefung: [""],
		cp: 6,
		vorher: [],
		dozent: ["Prof. Dr. Christoph Meinel"],
		nameLV: "Mathematik I - Diskrete Strukturen und Logik"
	},
	mathematik2: {
		kurz: "Mathematik II",
		lehrform: ["Vorlesung", "Übung"],
		modul: ["Mathematische und theoretische Grundlagen"],
		semester: [ss11, ss12, ss13, ss14, ss15],
		pflicht: true,
		empfohlen: 2,
		vertiefung: [""],
		cp: 6,
		vorher: [],
		dozent: ["Dr. habil. Ferdinand Börner"],
		nameLV: "Mathematik II"
	},
	mod1: {
		kurz: "Mod I",
		lehrform: ["Vorlesung", "Übung"],
		modul: ["Softwaretechnik und Modellierung"],
		semester: [ws10_11, ws11_12, ws12_13, ws13_14, ws14_15, ws15_16],
		pflicht: true,
		empfohlen: 1,
		vertiefung: [""],
		cp: 6,
		vorher: [],
		dozent: ["Prof. Dr. Holger Giese"],
		nameLV: "Modellierung I"
	},
	mod2: {
		kurz: "Mod II",
		lehrform: ["Vorlesung", "Übung"],
		modul: ["Softwaretechnik und Modellierung"],
		semester: [ss11, ss12, ss13, ss14, ss15],
		pflicht: true,
		empfohlen: 2,
		vertiefung: [""],
		cp: 6,
		vorher: ["mod1"],
		dozent: ["Prof. Dr. Holger Giese", "Joachim Hänsel"],
		nameLV: "Modellierung II"
	},
	modellgetriebenesoftwareentwicklung: {
		kurz: "MDSD",
		lehrform: ["Seminar"],
		modul: ["Vertiefungsgebiete"],
		semester: [ss11],
		pflicht: false,
		empfohlen: "",
		vertiefung: [SAMT],
		cp: 3,
		vorher: ["mod1", "mod2"],
		dozent: ["Prof. Dr. Holger Giese", "Leen Lambers"],
		nameLV: "Grundlagen der modellgetriebenen Softwareentwicklung"
	},
	modellgetriebenesoftwareentwicklungvorlesung: {
		kurz: "MDSD Vorlesung",
		lehrform: ["Vorlesung", "Projekt"],
		modul: ["Vertiefungsgebiete"],
		semester: [ws12_13],
		pflicht: false,
		empfohlen: "",
		vertiefung: [SAMT],
		cp: 6,
		vorher: ["mod1", "mod2"],
		dozent: ["Prof. Dr. Holger Giese", "Stephan Hildebrandt"],
		nameLV: "Modellgetriebene Softwareentwicklung"
	},
	modularitaetskonzepte: {
		kurz: "Modularitäts-<br />konzepte",
		lehrform: ["Seminar"],
		modul: ["Vertiefungsgebiete"],
		semester: [ws12_13],
		pflicht: false,
		empfohlen: "",
		vertiefung: [OSIS, SAMT],
		cp: 3,
		vorher: [],
		dozent: ["Prof. Dr. Robert Hirschfeld"],
		nameLV: "Erweiterte Modularitätskonzepte"
	},
	multimediaanalyse: {
		kurz: "Multimedia<br />Analyse",
		lehrform: ["Seminar"],
		modul: ["Vertiefungsgebiete"],
		semester: [ss11, ss12, ss13],
		pflicht: false,
		empfohlen: "",
		vertiefung: [HCT, IST, OSIS],
		cp: 6,
		vorher: [],
		dozent: ["Dr. rer. nat. Harald Sack"],
		nameLV: "Multimedia Analyse Technologien"
	},
	multimediaannotations: {
		kurz: "Multimedia<br />Annotations",
		lehrform: ["Seminar"],
		modul: ["Vertiefungsgebiete"],
		semester: [ws13_14],
		pflicht: false,
		empfohlen: "",
		vertiefung: [IST, OSIS],
		cp: 6,
		vorher: [],
		dozent: ["Dr. Harald Sack", "Christian Willems"],
		nameLV: "Crowdsourcing Multimedia Annotations"
	},
	nosql: {
		kurz: "NoSQL",
		lehrform: ["Seminar"],
		modul: ["Vertiefungsgebiete"],
		semester: [ss11],
		pflicht: false,
		empfohlen: "",
		vertiefung: [OSIS],
		cp: 3,
		vorher: ["dbs1", "dbs2"],
		dozent: ["Prof. Dr. Felix Naumann", "Johannes Lorey"],
		nameLV: "NoSQL"
	},
	opensource: {
		kurz: "Open-Source–<br />Projekte",
		lehrform: ["Seminar"],
		modul: ["Vertiefungsgebiete"],
		semester: [ss11],
		pflicht: false,
		empfohlen: "",
		vertiefung: [OSIS, SAMT],
		cp: 3,
		vorher: [],
		dozent: ["Dr. Martin von Löwis"],
		nameLV: "Entwicklungsprozesse in Open-Source-Projekten"
	},
	parallelesrechnen: {
		kurz: "Paralleles Rechnen",
		lehrform: ["Vorlesung"],
		modul: ["Vertiefungsgebiete"],
		semester: [ss12],
		pflicht: false,
		empfohlen: "",
		vertiefung: [OSIS],
		cp: 6,
		vorher: [],
		dozent: ["Prof. Dr. Bettina Schnor"],
		nameLV: "Paralleles Rechnen"
	},
	pem: {
		kurz: "PEM",
		lehrform: ["Seminar"],
		modul: ["Softskills"],
		semester: [ws10_11, ss11, ws11_12, ss12, ws12_13, ss13, ws13_14, ss14, ws14_15, ss15, ws15_16],
		pflicht: true,
		empfohlen: "",
		vertiefung: [""],
		cp: 6,
		vorher: [],
		dozent: ["Dr. Michaela Schumacher", "Andrea Bassen", "Corinna Ruppel"],
		nameLV: "Projektentwicklung und -management (PEM I und II)"
	},
	personalausweis: {
		kurz: "Personalausweis",
		lehrform: ["Seminar", "Projekt"],
		modul: ["Vertiefungsgebiete"],
		semester: [ws11_12],
		pflicht: false,
		empfohlen: "",
		vertiefung: [IST],
		cp: 3,
		vorher: [],
		dozent: ["Prof. Dr. Christoph Meinel", "Dr. Marian Margraf", "Maxim Schnjakin"],
		nameLV: "Der neue Personalausweis: Konzept und Umsetzung"
	},
	pois1: {
		kurz: "POIS I",
		lehrform: ["Vorlesung", "Übung"],
		modul: ["Softwarebasissysteme", "Vertiefungsgebiete"],
		semester: [ws10_11, ws11_12, ws12_13, ws13_14, ws14_15, ws15_16],
		pflicht: false,
		empfohlen: "",
		vertiefung: [BPET, SAMT],
		cp: 6,
		vorher: [],
		dozent: ["Prof. Dr. Mathias Weske"],
		nameLV: "Entwurf und Implementierung prozessorientierter Informationssysteme"
	},
	pois2: {
		kurz: "POIS II",
		lehrform: ["Vorlesung", "Übung"],
		modul: ["Vertiefungsgebiete"],
		semester: [ss11, ss12, ss14, ss15],
		pflicht: false,
		empfohlen: "",
		vertiefung: [BPET, SAMT],
		cp: 6,
		vorher: ["pois1"],
		dozent: ["Prof. Dr. Mathias Weske"],
		nameLV: "Prozessorientierte Informationssysteme II"
	},
	praesentieren: {
		kurz: "Überzeugend<br />Präsentieren",
		lehrform: ["Blockseminar"],
		modul: ["Softskills"],
		semester: [ws11_12, ss12, ws12_13, ss13, ws13_14, ss14, ws14_15, ss15, ws15_16],
		pflicht: false,
		empfohlen: "",
		vertiefung: [""],
		cp: 3,
		vorher: [],
		dozent: ["Dr. Werner Dieball"],
		nameLV: "Überzeugend Präsentieren"
	},
	processapplications: {
		kurz: "Process–<br />Based Apps",
		lehrform: ["Seminar", "Projekt"],
		modul: ["Vertiefungsgebiete"],
		semester: [ws10_11],
		pflicht: false,
		empfohlen: "",
		vertiefung: [BPET],
		cp: 6,
		vorher: [],
		dozent: ["Prof. Dr. Mathias Weske", "Matthias Kunze"],
		nameLV: "Usability of Process-Based Applications"
	},
	programminglanguageconcepts: {
		kurz: "Programming<br />Language Concepts",
		lehrform: ["Seminar"],
		modul: ["Vertiefungsgebiete"],
		semester: [ss14],
		pflicht: false,
		empfohlen: "",
		vertiefung: [SAMT],
		cp: 3,
		vorher: [],
		dozent: ["Prof. Dr. Robert Hirschfeld", "Tim Felgentreff", "Tobias Pape"],
		nameLV: "Programming Language Concepts"
	},
	programminglanguageconcepts2: {
		kurz: "Ausgewählte<br/>Programmiersprachkonzepte",
		lehrform: ["Seminar"],
		modul: ["Vertiefungsgebiete"],
		semester: [ws14_15],
		pflicht: false,
		empfohlen: "",
		vertiefung: [SAMT, OSIS],
		cp: 3,
		vorher: [],
		dozent: ["Prof. Dr. Robert Hirschfeld", "Tim Felgentreff", "Tobias Pape"],
		nameLV: "Ausgewählte Programmiersprachkontezpte"
	},
	proseminarinformationssysteme: {
		kurz: "Proseminar<br/>Informationssysteme",
		lehrform: ["Seminar"],
		modul: ["Vertiefungsgebiete"],
		semester: [ws14_15],
		pflicht: false,
		empfohlen: "",
		vertiefung: [BPET, OSIS],
		cp: 3,
		vorher: [],
		dozent: ["Prof. Dr. Felix Naumann"],
		nameLV: "Proseminar Informationssysteme"
	},
	pt1: {
		kurz: "PT I",
		lehrform: ["Vorlesung", "Übung"],
		modul: ["Grundlagen IT-Systems Engineering"],
		semester: [ws10_11, ws11_12, ws12_13, ws13_14, ws14_15, ws15_16],
		pflicht: true,
		empfohlen: 1,
		vertiefung: [""],
		cp: 6,
		vorher: [],
		dozent: ["Prof. Dr. Robert Hirschfeld"],
		nameLV: "Einführung in die Programmiertechnik I"
	},
	pt2: {
		kurz: "PT II",
		lehrform: ["Vorlesung", "Übung"],
		modul: ["Grundlagen IT-Systems Engineering"],
		semester: [ss11, ss12, ss13, ss14, ss15],
		pflicht: true,
		empfohlen: 2,
		vertiefung: [""],
		cp: 6,
		vorher: ["pt1"],
		dozent: ["Prof. Dr. Felix Naumann", "Toni Grütze"],
		nameLV: "Einführung in die Programmiertechnik II"
	},
	qualitaetssicherunginwebapps: {
		kurz: "Qualität<br />in Web-Apps",
		lehrform: ["Seminar"],
		modul: ["Vertiefungsgebiete"],
		semester: [ss11],
		pflicht: false,
		empfohlen: "",
		vertiefung: [IST],
		cp: 3,
		vorher: [],
		dozent: ["Prof. Dr. Christoph Meinel", "Franka Moritz"],
		nameLV: "Qualitätssicherung in Web-Applikationen"
	},
	raeuberundgendarm: {
		kurz: "Räuber und<br />Gendarm",
		lehrform: ["Seminar"],
		modul: ["Vertiefungsgebiete"],
		semester: [ss11],
		pflicht: false,
		empfohlen: "",
		vertiefung: [IST],
		cp: 6,
		vorher: [],
		dozent: ["Prof. Dr. Christoph Meinel", "Dr. Feng Cheng"],
		nameLV: '"Räuber und Gendarm" (CTF-Szenarien)'
	},
	raeumlicheundraumzeitlichedaten: {
		kurz: "Raum/Raumzeitl.<br />Daten",
		lehrform: ["Seminar"],
		modul: ["Vertiefungsgebiete"],
		semester: [ws15_16],
		pflicht: false,
		empfohlen: "",
		vertiefung: [HCT, OSIS],
		cp: 6,
		vorher: [],
		dozent: ["Prof. Dr. Jürgen Döllner"],
		nameLV: "Seminar Räumliche Daten und raumzeitliche Daten"
	},
	recht1: {
		kurz: "Recht I",
		lehrform: ["Vorlesung"],
		modul: ["Rechtliche und wirtschaftliche Grundlagen"],
		semester: [ss11, ss12, ss13, ss14, ss15],
		pflicht: true,
		empfohlen: 2,
		vertiefung: [""],
		cp: 3,
		vorher: [],
		dozent: ["Dr. Timm Krohn"],
		nameLV: "Recht für Ingenieure I"
	},
	recht2: {
		kurz: "Recht II",
		lehrform: ["Vorlesung"],
		modul: ["Rechtliche und wirtschaftliche Grundlagen"],
		semester: [ws10_11, ws11_12, ws12_13, ws13_14, ws14_15, ws15_16],
		pflicht: true,
		empfohlen: 3,
		vertiefung: [""],
		cp: 3,
		vorher: [],
		dozent: ["Dr. Timm Krohn"],
		nameLV: "Recht für Ingenieure II"
	},
	rfid: {
		kurz: "RFID",
		lehrform: ["Seminar"],
		modul: ["Vertiefungsgebiete"],
		semester: [ss11],
		pflicht: false,
		empfohlen: "",
		vertiefung: [BPET, HCT, OSIS],
		cp: 6,
		vorher: [],
		dozent: ["Dr. Alexander Zeier", "Martin Lorenz", "Matthieu Schapranow"],
		nameLV: "Real-World Applications in RFID-Aided Supply Chains"
	},
	securecoding: {
		kurz: "SecCoding",
		lehrform: ["Seminar"],
		modul: ["Vertiefungsgebiete"],
		semester: [ss13, ss15],
		pflicht: false,
		empfohlen: "",
		vertiefung: [IST, OSIS, SAMT],
		cp: 6,
		vorher: [],
		dozent: ["Dr. Sebastian Roschke"],
		nameLV: "Secure Coding"
	},
  privacypublicclouds:
  {
    kurz: "Cloud<br>Privacy",
    lehrform: ["Seminar"],
    modul: ["Vertiefungsgebiete"],
    semester: [ss15],
    pflicht: false,
    empfohlen: "",
    vertiefung: [IST, OSIS, SAMT],
    cp: 6,
    vorher: [],
    dozent: ["Prof. Dr. Christoph Meinel"],
    nameLV: "Securing Cloud Storages"
  },
	semanticmedia: {
		kurz: "Media<br />Mining",
		lehrform: ["Seminar"],
		modul: ["Vertiefungsgebiete"],
		semester: [ws12_13, ws15_16],
		pflicht: false,
		empfohlen: "",
		vertiefung: [IST, OSIS],
		cp: 6,
		vorher: [],
		dozent: ["Dr. Harald Sack", "Jörg Waitelonis"],
		nameLV: "Semantic Media Mining"
	},
	seo: {
		kurz: "SEO",
		lehrform: ["Seminar", "Projekt"],
		modul: ["Vertiefungsgebiete"],
		semester: [ws10_11, ws11_12, ws12_13],
		pflicht: false,
		empfohlen: "",
		vertiefung: [IST],
		cp: 3,
		vorher: [],
		dozent: ["Prof. Dr. Christoph Meinel", "Franka Grünewald"],
		nameLV: "SEO - Search Engine Optimization"
	},
	soa: {
		kurz: "SOA",
		lehrform: ["Seminar"],
		modul: ["Vertiefungsgebiete"],
		semester: [ss12],
		pflicht: false,
		empfohlen: "",
		vertiefung: [IST, BPET],
		cp: 3,
		vorher: [],
		dozent: ["Prof. Dr. Christoph Meinel", "Ivonne Thomas"],
		nameLV: "SOA- und Cloud-Standards, Praktische Anwendungen"
	},
	studiumplus: {
		kurz: "StudiumPlus",
		lehrform: [""],
		modul: ["Softskills"],
		semester: [ws10_11, ss11, ws11_12, ss12, ws12_13, ss13, ws13_14, ss14, ws14_15, ss15],
		pflicht: false,
		empfohlen: "",
		vertiefung: [""],
		cp: 3,
		vorher: [],
		dozent: [""],
		nameLV: "StudiumPlus"
	},
	swa: {
		kurz: "SWA",
		lehrform: ["Vorlesung", "Projekt"],
		modul: ["Grundlagen IT-Systems Engineering"],
		semester: [ws10_11, ws11_12, ws12_13, ws13_14, ws14_15, ws15_16],
		pflicht: true,
		empfohlen: 3,
		vertiefung: [""],
		cp: 6,
		vorher: [],
		dozent: ["Prof. Dr. Robert Hirschfeld", "Dr. Michael Perscheid"],
		nameLV: "Softwarearchitektur"
	},
	swt1: {
		kurz: "SWT I",
		lehrform: ["Vorlesung", "Übung"],
		modul: ["Softwaretechnik und Modellierung"],
		semester: [ss11, ss12, ss13, ss14, ss15],
		pflicht: true,
		empfohlen: 4,
		vertiefung: [""],
		cp: 6,
		vorher: ["swa"],
		dozent: ["Prof. Dr. Robert Hirschfeld", "Dr. Michael Perscheid"],
		nameLV: "Softwaretechnik I"
	},
	swt2: {
		kurz: "SWT II",
		lehrform: ["Vorlesung"],
		modul: ["Vertiefungsgebiete"],
		semester: [ws10_11, ws11_12, ws12_13, ws13_14, ws14_15, ws15_16],
		pflicht: false,
		empfohlen: "",
		vertiefung: [BPET, OSIS, SAMT],
		cp: 6,
		vorher: ["swt1"],
		dozent: ["Prof. Dr. Hasso Plattner", "Jürgen Müller"],
		nameLV: "Softwaretechnik II"
	},
	swq: {
		kurz: "SWQualität",
		lehrform: ["Vorlesung", "Project"],
		modul: ["Vertiefungsgebiete"],
		semester: [ws15_16],
		pflicht: false,
		empfohlen: "",
		vertiefung: [OSIS, SAMT],
		cp: 6,
		vorher: []
		dozent: ["Prof. Dr. Holger Giese"],
		nameLV: "Softwarequalität"
	},
	ti1: {
		kurz: "TI I",
		lehrform: ["Vorlesung", "Übung"],
		modul: ["Mathematische und theoretische Grundlagen"],
		semester: [ws10_11, ws11_12, ws12_13, ws13_14, ws14_15, ws15_16],
		pflicht: true,
		empfohlen: 3,
		vertiefung: [""],
		cp: 6,
		vorher: [],
		dozent: ["Prof. Dr. Tobias Friedrich"],
		nameLV: "Theoretische Informatik I"
	},
	ti2: {
		kurz: "TI II",
		lehrform: ["Vorlesung", "Übung"],
		modul: ["Mathematische und theoretische Grundlagen"],
		semester: [ss11, ss12, ss13, ss14, ss15],
		pflicht: true,
		empfohlen: 4,
		vertiefung: [""],
		cp: 6,
		vorher: ["ti1"],
		dozent: ["Prof. Dr. Jürgen Dassow"],
		nameLV: "Theoretische Informatik II"
	},
	telemedicine: {
		kurz: "Telemedicine",
		lehrform: ["Seminar"],
		modul: ["Vertiefungsgebiete"],
		semester: [ss13],
		pflicht: false,
		empfohlen: "",
		vertiefung: [HCT, IST, OSIS],
		cp: 3,
		vorher: [],
		dozent: ["Prof. Dr. Christoph Meinel", "Nuhad Shaabani", "Aaron Kunde"],
		nameLV: "Telemedicine"
	},
	unternehmensanwendungen: {
		kurz: "Unternehmensanwendungen",
		lehrform: ["Seminar"],
		modul: ["Vertiefungsgebiete"],
		semester: [ss15],
		pflicht: false,
		empfohlen: "",
		vertiefung: [BPET, OSIS],
		cp: 6,
		vorher: [],
		dozent: ["Dr. Mathias Uflacker", "Werner Sinzig"],
		nameLV: "UNternehmensanwendungen: Prozesse, Modelle, Implementierung"
	},
	vhdl: {
		kurz: "VHDL",
		lehrform: ["Vorlesung"],
		modul: ["Vertiefungsgebiete"],
		semester: [ss11, ss12, ss13, ss14],
		pflicht: false,
		empfohlen: "",
		vertiefung: [OSIS, SAMT],
		cp: 6,
		vorher: ["gds"],
		dozent: ["Dr.-Ing. Ralf Wollowski"],
		nameLV: "Entwurf und Implementierung digitaler Schaltungen mit VHDL"
	},
	videoanalysetechnologien: {
		kurz: "Video-Analyse-<br/>Technologien",
		lehrform: ["Seminar"],
		modul: ["Vertiefungsgebiete"],
		semester: [ws14_15],
		pflicht: false,
		empfohlen: "",
		vertiefung: [IST, OSIS, SAMT],
		cp: 6,
		vorher: [],
		dozent: ["Prof. Dr. Christoph Meinel", "Dr, Haojin Yang"],
		nameLV: "Praktische Anwendung von Video-Analyse-Technologien"
	},
	webaccessibilityopenhpi: {
		kurz: "openHPI<br />Web Accesibility",
		lehrform: ["Seminar", "Projekt"],
		modul: ["Vertiefungsgebiete"],
		semester: [ws15_16],
		pflicht: false,
		empfohlen: "",
		vertiefung: [IST, OSIS, SAMT],
		cp: 6,
		vorher: [],
		dozent: ["Prof. Dr. Christoph Meinel"],
		nameLV: "openHPI: Web Accessibility - Opening up web applications for everyone"
	},
	webappselearning: {
		kurz: "Web Apps<br />eLearning",
		lehrform: ["Seminar"],
		modul: ["Vertiefungsgebiete"],
		semester: [ws13_14],
		pflicht: false,
		empfohlen: "",
		vertiefung: [IST, OSIS, SAMT],
		cp: 6,
		vorher: [],
		dozent: ["Prof. Dr. Christoph Meinel", "Jan Renz", "Thomas Staubitz"],
		nameLV: "Creating Interactive Web-based Apps in the Context of eLearning"
	},
	webmobile: {
		kurz: "Mobile<br />Web",
		lehrform: ["Seminar", "Projekt"],
		modul: ["Vertiefungsgebiete"],
		semester: [ss12],
		pflicht: false,
		empfohlen: "",
		vertiefung: [BPET, IST],
		cp: 6,
		vorher: [],
		dozent: ["Prof. Dr. Christoph Meinel", "Christian Willems"],
		nameLV: "Web-Programmierung für mobile Endgeräte"
	},
	webzwonull: {
		kurz: "Webprogrammierung",
		lehrform: ["Seminar", "Projekt"],
		modul: ["Vertiefungsgebiete"],
		semester: [ws11_12, ws12_13, ws13_14, ws14_15, ws15_16],
		pflicht: false,
		empfohlen: "",
		vertiefung: [BPET, IST, SAMT],
		cp: 6,
		vorher: [],
		dozent: ["Prof. Dr. Christoph Meinel", "Matthias Bauer"],
		nameLV: "Web-Programmierung und Web-Frameworks"
	},
	webservice: {
		kurz: "Web<br />Services",
		lehrform: ["Seminar"],
		modul: ["Vertiefungsgebiete"],
		semester: [ss11],
		pflicht: false,
		empfohlen: "",
		vertiefung: [IST],
		cp: 3,
		vorher: [],
		dozent: ["Prof. Dr. Christoph Meinel", "Robert Warschofsky", "Ivonne Thomas"],
		nameLV: "Web Service Technologien"
	},
	wirtschaft1: {
		kurz: "Wirtschaft I",
		lehrform: ["Vorlesung"],
		modul: ["Rechtliche und wirtschaftliche Grundlagen"],
		semester: [ws10_11],
		pflicht: false,
		empfohlen: "",
		vertiefung: [""],
		cp: 3,
		vorher: [],
		dozent: ["Prof. Dr. Jan Kratzer"],
		nameLV: "Wirtschaftliche Grundlagen I"
	},
	wirtschaft2: {
		kurz: "Wirtschaft II",
		lehrform: ["Vorlesung"],
		modul: ["Rechtliche und wirtschaftliche Grundlagen"],
		semester: [ss11],
		pflicht: false,
		empfohlen: "",
		vertiefung: [""],
		cp: 3,
		vorher: [],
		dozent: ["Prof. Dr. Jan Kratzer"],
		nameLV: "Wirtschaftliche Grundlagen II"
	},
	wirtschaftneu: {
		kurz: "Wirtschaft I/II",
		lehrform: ["Vorlesung"],
		modul: ["Rechtliche und wirtschaftliche Grundlagen"],
		semester: [ws11_12, ws12_13, ws13_14, ws14_15, ws15_16],
		pflicht: false,
		empfohlen: 1,
		vertiefung: [""],
		cp: 6,
		vorher: [],
		dozent: ["Prof. Dr. Katharina Hölzle"],
		nameLV: "Wirtschaftliche Grundlagen I/II"
	},
	workflow: {
		kurz: "Workflow–<br />Anwendungen",
		lehrform: ["Seminar", "Projekt"],
		modul: ["Vertiefungsgebiete"],
		semester: [ss11],
		pflicht: false,
		empfohlen: "",
		vertiefung: [BPET, SAMT],
		cp: 6,
		vorher: [],
		dozent: ["Prof. Dr. Mathias Weske"],
		nameLV: "Entwicklung von Workflow-Anwendungen"
	},
	wrv: {
		kurz: "WRV",
		lehrform: ["Vorlesung"],
		modul: ["Vertiefungsgebiete"],
		semester: [ss12],
		pflicht: false,
		empfohlen: "",
		vertiefung: [SAMT, OSIS],
		cp: 6,
		vorher: [],
		dozent: ["Prof. Dr. Torsten Schaub"],
		nameLV: "Wissensrepräsentation und -verarbeitung"
	},
	www: {
		kurz: "WWW",
		lehrform: ["Vorlesung", "Übung"],
		modul: ["Softwarebasissysteme", "Vertiefungsgebiete"],
		semester: [ss11, ss12, ss13, ss14, ss15],
		pflicht: false,
		empfohlen: "",
		vertiefung: [IST, HCT],
		cp: 6,
		vorher: [],
		dozent: ["Prof. Dr. Christoph Meinel"],
		nameLV: "Internet- und WWW-Technologien"
	},
	wwwextra: {
		kurz: "WWW – <br />weiterführend",
		lehrform: ["Seminar"],
		modul: ["Vertiefungsgebiete"],
		semester: [ss11, ss12, ss13, ss14, ss15],
		pflicht: false,
		empfohlen: "",
		vertiefung: [IST, OSIS, SAMT],
		cp: 3,
		vorher: [],
		dozent: ["Prof. Dr. Christoph Meinel", "Matthias Bauer"],
		nameLV: "Weiterführende Themen zu Internet- und WWW-Technologien"
  }
};
