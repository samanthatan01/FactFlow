import React, { useState } from "react";
import useGetArticles from "/src/hooks/useGetArticles";
import FormatDate from "/src/utils/FormatDate";
import "/src/components/Display.css";

// importing icons from MUI Icons
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LinkIcon from "@mui/icons-material/Link";

//importing card related components from MUI
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CalculateSentiment from "../utils/CalculateSentiment";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const DisplayArticles = () => {
  // const { articles, numResults, isLoading, error } = useGetArticles(); //uncomment for real API calls

  //using dummy data to save real API calls
  const { articles, numResults, isLoading, error } = {
    articles: [
      {
        url: "https://theconversation.com/uni-students-have-had-to-be-vaccinated-against-other-diseases-covid-19-is-no-different-166103",
        authorsByline: "Peter D. Blanck Paul Harpur",
        articleId: "2fc7a02d52b14b158c7a7d50cf49a899",
        clusterId: "254d48a01acc41c48cc8ee30b4f1d613",
        source: {
          domain: "theconversation.com",
          location: null,
        },
        imageUrl:
          "https://images.theconversation.com/files/417116/original/file-20210820-13-1albo8g.jpg?ixlib=rb-1.1.0&rect=0%2C1311%2C4832%2C2416&q=45&auto=format&w=1356&h=668&fit=crop",
        country: "",
        language: "en",
        pubDate: "2021-08-22T20:05:55+00:00",
        addDate: "2021-08-24T18:14:35.557860+00:00",
        refreshDate: "2021-08-24T18:14:35.557860+00:00",
        score: 1,
        title:
          "Uni students have had to be vaccinated against other diseases — COVID-19 is no different",
        description:
          "Uni students have had to be vaccinated against other diseases — COVID-19 is no different  The Conversation AU",
        content:
          "Should universities require students to be fully vaccinated against COVID-19 before attending campus once vaccines are readily available in Australia?\n\nProfessor Iain Martin, vice-chancellor of Deakin... [5283 symbols]",
        medium: "Article",
        labels: [],
        matchedAuthors: [],
        claim: "",
        verdict: "",
        keywords: [
          {
            name: "university students",
            weight: 0.108416095,
          },
          {
            name: "COVID-19 vaccination",
            weight: 0.10792308,
          },
          {
            name: "International students",
            weight: 0.1034219,
          },
          {
            name: "international students",
            weight: 0.1034219,
          },
          {
            name: "most university students",
            weight: 0.10218195,
          },
          {
            name: "Students",
            weight: 0.10164246,
          },
          {
            name: "students",
            weight: 0.10164246,
          },
          {
            name: "unvaccinated students",
            weight: 0.09993968,
          },
          {
            name: "uni students",
            weight: 0.09892976,
          },
          {
            name: "Mandatory COVID-19 vaccines",
            weight: 0.09468109,
          },
        ],
        topics: [
          {
            name: "Coronavirus",
          },
        ],
        categories: [],
        entities: [
          {
            data: "Australian",
            type: "NORP",
            mentions: 5,
          },
          {
            data: "uni",
            type: "NORP",
            mentions: 1,
          },
          {
            data: "COVID-19 vaccination",
            type: "LAW",
            mentions: 1,
          },
          {
            data: "COVID-19,",
            type: "LAW",
            mentions: 1,
          },
          {
            data: "US Supreme Court",
            type: "ORG",
            mentions: 3,
          },
          {
            data: "Deakin University",
            type: "ORG",
            mentions: 1,
          },
          {
            data: "the Faculty of Medical and Health Sciences",
            type: "ORG",
            mentions: 1,
          },
          {
            data: "the University of Auckland",
            type: "ORG",
            mentions: 1,
          },
          {
            data: "National Union of Students",
            type: "ORG",
            mentions: 1,
          },
          {
            data: "IDP Connect",
            type: "ORG",
            mentions: 1,
          },
          {
            data: "unis",
            type: "ORG",
            mentions: 1,
          },
          {
            data: "the University of Calgary",
            type: "ORG",
            mentions: 1,
          },
          {
            data: "Columbia",
            type: "ORG",
            mentions: 1,
          },
          {
            data: "Harvard",
            type: "ORG",
            mentions: 1,
          },
          {
            data: "Princeton",
            type: "ORG",
            mentions: 1,
          },
          {
            data: "Stanford",
            type: "ORG",
            mentions: 1,
          },
          {
            data: "UCLA",
            type: "ORG",
            mentions: 1,
          },
          {
            data: "Yale",
            type: "ORG",
            mentions: 1,
          },
          {
            data: "Indiana University’s",
            type: "ORG",
            mentions: 1,
          },
          {
            data: "the Seventh Circuit",
            type: "ORG",
            mentions: 1,
          },
          {
            data: "Australia",
            type: "GPE",
            mentions: 6,
          },
          {
            data: "Canada",
            type: "GPE",
            mentions: 2,
          },
          {
            data: "the United States",
            type: "GPE",
            mentions: 2,
          },
          {
            data: "Sydney",
            type: "GPE",
            mentions: 1,
          },
          {
            data: "Western Australia",
            type: "GPE",
            mentions: 1,
          },
          {
            data: "Ottawa",
            type: "GPE",
            mentions: 1,
          },
          {
            data: "Toronto",
            type: "GPE",
            mentions: 1,
          },
          {
            data: "Iain Martin",
            type: "PERSON",
            mentions: 1,
          },
          {
            data: "Martin",
            type: "PERSON",
            mentions: 1,
          },
          {
            data: "Zoe Ranganathan",
            type: "PERSON",
            mentions: 1,
          },
          {
            data: "Amy Coney Barrett",
            type: "PERSON",
            mentions: 1,
          },
          {
            data: "Georgia Atcheson",
            type: "PERSON",
            mentions: 1,
          },
          {
            data: "Asia",
            type: "LOC",
            mentions: 1,
          },
          {
            data: "Europe",
            type: "LOC",
            mentions: 1,
          },
          {
            data: "Latin America",
            type: "LOC",
            mentions: 1,
          },
          {
            data: "North America",
            type: "LOC",
            mentions: 1,
          },
        ],
        sentiment: {
          positive: 0.06365782,
          negative: 0.12120256,
          neutral: 0.8151396,
        },
        summary:
          "Researchers at the universities of Sydney and Western Australia found three-quarters of Australians would support a mandatory COVID-19 vaccination policy for travel, study and work. \n\nAnother consideration for universities is international students, whose fees subsidise affordable public education and research and innovation. Prior to COVID-19, 32% of university students in Australia were full-fee-paying international students. \n\nA recent IDP Connect survey found an overwhelming majority of international students were already vaccinated or willing to be vaccinated to return to campuses.",
        translation: "",
        locations: [],
        reprint: false,
        places: null,
      },
      {
        url: "https://timesuniononline.com/Content/Local-News/Local-News/Article/The-Annual-Heirloom-Tomato-Festival-In-Pierceton-Is-Saturday/2/453/134794",
        authorsByline: "",
        articleId: "bf9786faa9f4411aa4b0cabbb1019809",
        clusterId: "053a4f2f8cd44a4d8129e7387685d890",
        source: {
          domain: "timesuniononline.com",
          location: null,
        },
        imageUrl: "http://timesuniononline.com/Images/Images/224626.jpg",
        country: "us",
        language: "en",
        pubDate: "2021-08-22T20:05:58+00:00",
        addDate: "2021-08-24T18:14:35.558779+00:00",
        refreshDate: "2021-08-24T18:14:35.558779+00:00",
        score: 1,
        title: "The Annual Heirloom Tomato Festival In Pierceton Is Saturday",
        description:
          "The Annual Heirloom Tomato Festival In Pierceton Is Saturday  Times-Union Newspaper",
        content:
          "PIERCETON – The 14th Annual Heirloom Tomato Festival will be from 10 a.m. to 4 p.m. Saturday at Brower Park and the Old Train Depot in downtown Pierceton.\n\n\n\n The 5K Run/Walk registration will be 8 to... [4226 symbols]",
        medium: "Article",
        labels: [],
        matchedAuthors: [],
        claim: "",
        verdict: "",
        keywords: [
          {
            name: "downtown Pierceton",
            weight: 0.09441597,
          },
          {
            name: "Heirloom Tomato Festival",
            weight: 0.089642935,
          },
          {
            name: "Pierceton",
            weight: 0.08257203,
          },
          {
            name: "Festival organizers",
            weight: 0.08027432,
          },
          {
            name: "weaving demonstrations",
            weight: 0.07904429,
          },
          {
            name: "tomato sandwiches",
            weight: 0.073033415,
          },
          {
            name: "Festival",
            weight: 0.07287466,
          },
          {
            name: "Pacific Rim Book Festival",
            weight: 0.06929316,
          },
          {
            name: "seed steward",
            weight: 0.069290206,
          },
          {
            name: "regional seeds",
            weight: 0.06917175,
          },
        ],
        topics: [],
        categories: [],
        entities: [
          {
            data: "The Satyr Candidate",
            type: "WORK_OF_ART",
            mentions: 1,
          },
          {
            data: "The Lazarus Conspiracies",
            type: "WORK_OF_ART",
            mentions: 1,
          },
          {
            data: "The Gumshoe",
            type: "WORK_OF_ART",
            mentions: 1,
          },
          {
            data: "Retribution",
            type: "WORK_OF_ART",
            mentions: 1,
          },
          {
            data: "All Gone Blue",
            type: "WORK_OF_ART",
            mentions: 1,
          },
          {
            data: "Tag Art Entertainers",
            type: "WORK_OF_ART",
            mentions: 1,
          },
          {
            data: "The People’s Choice Award",
            type: "WORK_OF_ART",
            mentions: 1,
          },
          {
            data: "The Big, Bad and the Ugly (Tomato Worm) Contest",
            type: "WORK_OF_ART",
            mentions: 1,
          },
          {
            data: "Heirloom Tomato Festival",
            type: "EVENT",
            mentions: 4,
          },
          {
            data: "5K",
            type: "EVENT",
            mentions: 1,
          },
          {
            data: "Pacific Rim Book Festival",
            type: "EVENT",
            mentions: 1,
          },
          {
            data: "Festival",
            type: "EVENT",
            mentions: 1,
          },
          {
            data: "the Largest Tomato Contest",
            type: "EVENT",
            mentions: 1,
          },
          {
            data: "American",
            type: "NORP",
            mentions: 1,
          },
          {
            data: "Savant Books and Publications",
            type: "ORG",
            mentions: 1,
          },
          {
            data: "Class Act Dance Troupe",
            type: "ORG",
            mentions: 1,
          },
          {
            data: "Basket Case",
            type: "ORG",
            mentions: 1,
          },
          {
            data: "the Old Train Depot",
            type: "ORG",
            mentions: 1,
          },
          {
            data: "the Whitko Art Museum and Galleries",
            type: "ORG",
            mentions: 1,
          },
          {
            data: "Shenanigans",
            type: "ORG",
            mentions: 1,
          },
          {
            data: "Big C BBQ",
            type: "ORG",
            mentions: 1,
          },
          {
            data: "PIERCETON",
            type: "GPE",
            mentions: 4,
          },
          {
            data: "Kokomo",
            type: "GPE",
            mentions: 1,
          },
          {
            data: "Indiana",
            type: "GPE",
            mentions: 1,
          },
          {
            data: "Hollywood",
            type: "GPE",
            mentions: 1,
          },
          {
            data: "Chicago",
            type: "GPE",
            mentions: 1,
          },
          {
            data: "the United States",
            type: "GPE",
            mentions: 1,
          },
          {
            data: "Italy",
            type: "GPE",
            mentions: 1,
          },
          {
            data: "Romania",
            type: "GPE",
            mentions: 1,
          },
          {
            data: "the Old Train Depot",
            type: "FAC",
            mentions: 5,
          },
          {
            data: "Brower Park",
            type: "FAC",
            mentions: 4,
          },
          {
            data: "N. First St.,",
            type: "FAC",
            mentions: 2,
          },
          {
            data: "Rose",
            type: "PERSON",
            mentions: 2,
          },
          {
            data: "Lund",
            type: "PERSON",
            mentions: 2,
          },
          {
            data: "Kim Lund",
            type: "PERSON",
            mentions: 1,
          },
          {
            data: "Richard Rose",
            type: "PERSON",
            mentions: 1,
          },
          {
            data: "Lazarus",
            type: "PERSON",
            mentions: 1,
          },
          {
            data: "Martin Longseth",
            type: "PERSON",
            mentions: 1,
          },
          {
            data: "Jared Pagan",
            type: "PERSON",
            mentions: 1,
          },
          {
            data: "Deb Collier’s",
            type: "PERSON",
            mentions: 1,
          },
          {
            data: "10 a.m. to 4 p.m.",
            type: "TIME",
            mentions: 7,
          },
          {
            data: "8 to 8:40 a.m.",
            type: "TIME",
            mentions: 3,
          },
          {
            data: "1:30 p.m.",
            type: "TIME",
            mentions: 3,
          },
          {
            data: "noon to 1 p.m.",
            type: "TIME",
            mentions: 2,
          },
          {
            data: "9 a.m.",
            type: "TIME",
            mentions: 1,
          },
        ],
        sentiment: {
          positive: 0.036736336,
          negative: 0.027232666,
          neutral: 0.93603104,
        },
        summary:
          "The 14th Annual Heirloom Tomato Festival will be from 10 a.m. to 4 p.m. Saturday at Brower Park and the Old Train Depot in downtown Pierceton. Her collection of seeds contains more than 630 varieties from Italy and some rare family heirloom seeds from Romania, according to a news release from Festival organizers. \n\n\n\n Food vendors for the 2021 Heirloom Tomato Festival include homemade ice cream, kettle corn, fried green tomatoes, ham and beans, BLT sandwiches, tomato sandwiches, sassy vegan, Shenanigans, Big C BBQ, cobblers and produce/farmers market vendors. \n\n\n\n For more information, find the festival on Facebook at Heirloom Tomato Festival or www.piercetonchamber.com.",
        translation: "",
        locations: [],
        reprint: false,
        places: null,
      },
      {
        url: "https://kuriren.nu/artikel/renpmw5r",
        authorsByline: "",
        articleId: "8761147d6f7242e4bf041222423b77df",
        clusterId: "2c87cd08688b48a496cd82828edfecdb",
        source: {
          domain: "kuriren.nu",
          location: null,
        },
        imageUrl:
          "https://dms-api.ntm.eu/api/v1/images/jon6e48l/ratio/rw/3/rh/2/width/1200",
        country: "se",
        language: "da",
        pubDate: "2021-08-21T04:49:48+00:00",
        addDate: "2021-08-24T18:14:35.559805+00:00",
        refreshDate: "2021-08-24T18:14:35.559805+00:00",
        score: 1,
        title: 'Stillastående "Jack" i välsydd 1990-talsskrud – Kuriren',
        description:
          "Hannes Fossbo debuterar med en imponerande men statisk roman om ruffigt VÃ¤rmdÃ¶.",
        content: "",
        medium: "Article",
        labels: [],
        matchedAuthors: [],
        claim: "",
        verdict: "",
        keywords: [],
        topics: [],
        categories: [],
        entities: [],
        summary: "",
        translation: "",
        locations: [],
        reprint: false,
        places: null,
      },
      {
        url: "https://extra.ie/2021/08/22/property/louise-mcsharry-redecorated-family-home",
        authorsByline: "",
        articleId: "b121129c0c1247b69a86804a353d40e5",
        clusterId: "5f010281e31045568954fb95a2b73d62",
        source: {
          domain: "extra.ie",
          location: null,
        },
        imageUrl:
          "https://cdn.extra.ie/wp-content/uploads/2021/08/15133058/louise-mcsharry-feat.jpg",
        country: "us",
        language: "en",
        pubDate: "2021-08-22T19:56:48+00:00",
        addDate: "2021-08-24T18:14:35.560052+00:00",
        refreshDate: "2021-08-24T18:14:35.560052+00:00",
        score: 1,
        title: "Louise McSharry gives glimpse of redecorated family home",
        description:
          "Louise McSharry gives glimpse of redecorated family home  Extra.ie",
        content:
          "Louise McSharry has shared a glimpse of her recent home renovation — and it’s a huge thumbs up from the RTE DJ’s Instagram followers.\n\nLouise has lived in her Dublin home with husband Gordon and sons ... [1458 symbols]",
        medium: "Article",
        labels: [],
        matchedAuthors: [],
        claim: "",
        verdict: "",
        keywords: [
          {
            name: "contrasting colours",
            weight: 0.10633183,
          },
          {
            name: "dining room",
            weight: 0.08701057,
          },
          {
            name: "different functions",
            weight: 0.07702703,
          },
          {
            name: "Instagram",
            weight: 0.076395646,
          },
          {
            name: "paint makers Dulux",
            weight: 0.070158035,
          },
          {
            name: "a refreshing peach colour",
            weight: 0.069228426,
          },
          {
            name: "husband Gordon",
            weight: 0.06593412,
          },
          {
            name: "this peach colour",
            weight: 0.061331373,
          },
          {
            name: "Gordon",
            weight: 0.060584404,
          },
          {
            name: "denim blue",
            weight: 0.059520166,
          },
        ],
        topics: [],
        categories: [],
        entities: [
          {
            data: "Instagram",
            type: "ORG",
            mentions: 2,
          },
          {
            data: "RTE",
            type: "ORG",
            mentions: 1,
          },
          {
            data: "Dulux",
            type: "ORG",
            mentions: 1,
          },
          {
            data: "Dublin",
            type: "GPE",
            mentions: 1,
          },
          {
            data: "Louise",
            type: "PERSON",
            mentions: 3,
          },
          {
            data: "Louise McSharry",
            type: "PERSON",
            mentions: 1,
          },
          {
            data: "Gordon",
            type: "PERSON",
            mentions: 1,
          },
          {
            data: "Sam",
            type: "PERSON",
            mentions: 1,
          },
          {
            data: "Ted",
            type: "PERSON",
            mentions: 1,
          },
          {
            data: "Thalia Heffernan",
            type: "PERSON",
            mentions: 1,
          },
          {
            data: "Tara Stewart",
            type: "PERSON",
            mentions: 1,
          },
          {
            data: "sunrise",
            type: "TIME",
            mentions: 1,
          },
        ],
        sentiment: {
          positive: 0.09765607,
          negative: 0.024537737,
          neutral: 0.8778061,
        },
        summary:
          "\n\nLouise has lived in her Dublin home with husband Gordon and sons Sam and Ted for seven years, but said the property had ‘never really felt like me’. \n\nShe was eager to freshen up what she described as a ‘magnolia’ box and has now made over her kitchen and dining room as part of a collaboration with paint makers Dulux.\n\n‘While magnolia has a time and place, I desperately wanted some colour on the walls and to make it feel more zoned,’ she wrote on Instagram.\n\nThe refreshed room has now been ‘zoned’ using contrasting colours, with each area designed for different functions. \n\nThe area behind (and above) the dining table has been painted in denim blue, standing out from the rest of the room, which has been done in a refreshing peach colour.\n\n‘It makes that feel like a section and I love it. I think it will also be a perfect frame for our art,’ Louise said of the blue.\n\n‘I’m obsessed with this peach colour which changes throughout the day, as I type it looks much paler than it appears in this picture.\n\n‘Gordon says it reminds him of that beautiful light that comes in the window at sunrise and sunset and I think he’s exactly right.",
        translation: "",
        locations: [],
        reprint: false,
        places: null,
      },
      {
        url: "https://www.nbcsports.com/northwest/portland-thorns/morgan-weaver-scores-game-winning-goal-womens-international-champions-cup",
        authorsByline: "Dylan Mickanen",
        articleId: "bcd8567f490945799f3ed8dadfab6b55",
        clusterId: "554ba116d7464196932d49afeda032b7",
        source: {
          domain: "nbcsports.com",
          location: null,
        },
        imageUrl:
          "https://www.nbcsports.com/sites/rsnunited/files/styles/metatags_opengraph/public/article/hero/USATSI_16607281_168393342_lowres.jpeg?h=94e9308d",
        country: "us",
        language: "en",
        pubDate: "2021-08-22T20:07:37+00:00",
        addDate: "2021-08-24T18:14:35.560588+00:00",
        refreshDate: "2021-08-24T18:14:35.560588+00:00",
        score: 1,
        title:
          "Morgan Weaver scores game-winning goal in Women’s International Champions Cup final",
        description:
          "Morgan Weaver scores game-winning goal in Women’s International Champions Cup final  NBC Sports",
        content:
          "In the 87th minute of the Women’s International Champions Cup championship against French club Olympique Lyonnais, Morgan Weaver made a run that proved to be the difference-maker.\n\nShe collected the b... [1418 symbols]",
        medium: "Article",
        labels: [],
        matchedAuthors: [],
        claim: "",
        verdict: "",
        keywords: [
          {
            name: "second half substitutes",
            weight: 0.11400556,
          },
          {
            name: "French club Olympique Lyonnais",
            weight: 0.09656562,
          },
          {
            name: "second",
            weight: 0.092331626,
          },
          {
            name: "the second United States club team",
            weight: 0.08110518,
          },
          {
            name: "August 25th",
            weight: 0.08043004,
          },
          {
            name: "Morgan Weaver",
            weight: 0.07881952,
          },
          {
            name: "franchise history",
            weight: 0.07871881,
          },
          {
            name: "Providence Park",
            weight: 0.07739115,
          },
          {
            name: "United States",
            weight: 0.070060335,
          },
          {
            name: "Olympique Lyonnais",
            weight: 0.06660014,
          },
        ],
        topics: [],
        categories: [
          {
            name: "Sports",
          },
        ],
        entities: [
          {
            data: "International Champions Cup",
            type: "EVENT",
            mentions: 1,
          },
          {
            data: "the Women’s ICC tournament",
            type: "EVENT",
            mentions: 1,
          },
          {
            data: "the Tokyo 2020 Olympics",
            type: "EVENT",
            mentions: 1,
          },
          {
            data: "French",
            type: "NORP",
            mentions: 1,
          },
          {
            data: "European",
            type: "NORP",
            mentions: 1,
          },
          {
            data: "Portland",
            type: "ORG",
            mentions: 2,
          },
          {
            data: "Olympique Lyonnais",
            type: "ORG",
            mentions: 1,
          },
          {
            data: "Lyon",
            type: "ORG",
            mentions: 1,
          },
          {
            data: "Thorns FC",
            type: "ORG",
            mentions: 1,
          },
          {
            data: "WICC",
            type: "ORG",
            mentions: 1,
          },
          {
            data: "NWSL",
            type: "ORG",
            mentions: 1,
          },
          {
            data: "NJ/NY Gotham FC",
            type: "ORG",
            mentions: 1,
          },
          {
            data: "United States",
            type: "GPE",
            mentions: 1,
          },
          {
            data: "Providence Park",
            type: "FAC",
            mentions: 2,
          },
          {
            data: "Weaver",
            type: "PERSON",
            mentions: 2,
          },
          {
            data: "Morgan Weaver",
            type: "PERSON",
            mentions: 1,
          },
          {
            data: "Christen Westphal",
            type: "PERSON",
            mentions: 1,
          },
          {
            data: "Lindsey Horan",
            type: "PERSON",
            mentions: 1,
          },
          {
            data: "Christine Sinclair",
            type: "PERSON",
            mentions: 1,
          },
          {
            data: "the 87th minute",
            type: "TIME",
            mentions: 2,
          },
          {
            data: "Five minutes later",
            type: "TIME",
            mentions: 1,
          },
          {
            data: "7:30 p.m. PST",
            type: "TIME",
            mentions: 1,
          },
        ],
        sentiment: {
          positive: 0.11777024,
          negative: 0.056117937,
          neutral: 0.82611185,
        },
        summary:
          "In the 87th minute of the Women’s International Champions Cup championship against French club Olympique Lyonnais, Morgan Weaver made a run that proved to be the difference-maker. \n\nWith the win, Portland became the second United States club team to win the Women’s ICC tournament. \n\nWhen the club hoisted the WICC trophy at Providence Park, it was the sixth trophy in franchise history and second in 2021 alone. \n\nCrystal Dunn, Lindsey Horan, and Christine Sinclair all made their first appearances since returning from the Tokyo 2020 Olympics as second half substitutes.",
        translation: "",
        locations: [],
        reprint: false,
        places: null,
      },
      {
        url: "https://www.broadcastprome.com/videos/yooncompany-introduces-bubble-up/",
        authorsByline: "",
        articleId: "8c5f80bd107b4c79ad9783413cc7697b",
        clusterId: "300b3574576646368c080b74a5846fd1",
        source: {
          domain: "broadcastprome.com",
          location: null,
        },
        imageUrl:
          "https://www.broadcastprome.com/wp-content/uploads/2021/08/Bubble-Up.jpg",
        country: "us",
        language: "en",
        pubDate: "2021-08-22T20:01:36+00:00",
        addDate: "2021-08-24T18:14:35.561261+00:00",
        refreshDate: "2021-08-24T18:14:35.561261+00:00",
        score: 1,
        title: "Yoon&Company introduces 'Bubble Up'",
        description: "Yoon&Company introduces 'Bubble Up'  BroadcastProME.com",
        content:
          "Show title: Bubble Up\n\n Run time: 10×15’\n\n Director: Soochul Park\n\n Producer: Jong-ho Yoon\n\n Cast: Sohee (Nature), Youngbin (SF9)\n\n Exec Producer: Jaemin Ryu\n\n Writer: Saeyoung\n\n Genre: Drama\n\n Demogr... [996 symbols]",
        medium: "Article",
        labels: [],
        matchedAuthors: [],
        claim: "",
        verdict: "",
        keywords: [
          {
            name: "Everyshow Inc",
            weight: 0.11439639,
          },
          {
            name: "different life",
            weight: 0.10077819,
          },
          {
            name: "Yoon&Company Inc.",
            weight: 0.08833502,
          },
          {
            name: "Hulu",
            weight: 0.08360626,
          },
          {
            name: "TV shows",
            weight: 0.075809084,
          },
          {
            name: "Saeyoung",
            weight: 0.069512665,
          },
          {
            name: "Bubble Up",
            weight: 0.06896512,
          },
          {
            name: "Yoon Jong-Ho",
            weight: 0.068237305,
          },
          {
            name: "high school",
            weight: 0.06746053,
          },
          {
            name: "Company Profile",
            weight: 0.06708748,
          },
        ],
        topics: [],
        categories: [],
        entities: [
          {
            data: "Yoon&Company Inc.",
            type: "ORG",
            mentions: 3,
          },
          {
            data: "Bubble Up",
            type: "ORG",
            mentions: 1,
          },
          {
            data: "Nature",
            type: "ORG",
            mentions: 1,
          },
          {
            data: "SF9",
            type: "ORG",
            mentions: 1,
          },
          {
            data: "Bubble TV",
            type: "ORG",
            mentions: 1,
          },
          {
            data: "Everyshow Inc",
            type: "ORG",
            mentions: 1,
          },
          {
            data: "Amazon",
            type: "ORG",
            mentions: 1,
          },
          {
            data: "Hulu",
            type: "ORG",
            mentions: 1,
          },
          {
            data: "Hayoung",
            type: "PERSON",
            mentions: 3,
          },
          {
            data: "Jong-ho Yoon",
            type: "PERSON",
            mentions: 2,
          },
          {
            data: "Soochul Park",
            type: "PERSON",
            mentions: 1,
          },
          {
            data: "Sohee",
            type: "PERSON",
            mentions: 1,
          },
          {
            data: "Youngbin",
            type: "PERSON",
            mentions: 1,
          },
          {
            data: "Jaemin Ryu",
            type: "PERSON",
            mentions: 1,
          },
          {
            data: "Saeyoung",
            type: "PERSON",
            mentions: 1,
          },
          {
            data: "10×15’",
            type: "TIME",
            mentions: 1,
          },
        ],
        sentiment: {
          positive: 0.043317348,
          negative: 0.043826796,
          neutral: 0.9128558,
        },
        summary:
          "\n\n Exec Producer: Jaemin Ryu\n\n Writer: Saeyoung Hayoung decides to not go to college after high school but start working to live different life. \n\nCompany name: Yoon&Company Inc.\n\n Company Profile:\n\n Yoon&Company Inc. was established in September 2016 by Yoon Jong-Ho who was the formal CEO of Everyshow Inc.. As a multimedia entertainment company, Yoon&Company Inc. is producing and licensing a variety of TV shows from drama, movie to documentary networking mainly with Amazon, Hulu, etc..",
        translation: "",
        locations: [],
        reprint: false,
        places: null,
      },
      {
        url: "https://www.yardbarker.com/nfl/articles/wilsons_near_perfect_day_spearheads_jets_victory_in_green_bay/s1_16703_35680925",
        authorsByline: "Max Schneider",
        articleId: "d5dbefc64cc14f38a2ded00262e09308",
        clusterId: "da66c9bebb6f4673842195a83ccbb85d",
        source: {
          domain: "yardbarker.com",
          location: null,
        },
        imageUrl:
          "https://prod-origin.yardbarker.com/images/yb_white_on_black_medium.jpg",
        country: "us",
        language: "en",
        pubDate: "2021-08-22T20:03:21+00:00",
        addDate: "2021-08-24T18:14:35.561856+00:00",
        refreshDate: "2021-08-24T18:14:35.561856+00:00",
        score: 1,
        title: "Wilson's Near-Perfect Day Spearheads Jets Victory in Green Bay",
        description:
          "Wilson's Near-Perfect Day Spearheads Jets Victory in Green Bay  Yardbarker",
        content:
          "There have only been two preseason games, both against backup defenses, but Wilson continues to check all the boxes. He’s been the most productive of the five first-round rookie quarterbacks thus far ... [3121 symbols]",
        medium: "Article",
        labels: [],
        matchedAuthors: [],
        claim: "",
        verdict: "",
        keywords: [
          {
            name: "first",
            weight: 0.06758053,
          },
          {
            name: "more playing time",
            weight: 0.06504377,
          },
          {
            name: "Saturday",
            weight: 0.059126854,
          },
          {
            name: "touchdowns",
            weight: 0.05902395,
          },
          {
            name: "injury",
            weight: 0.057233945,
          },
          {
            name: "missed tackles",
            weight: 0.052821677,
          },
          {
            name: "either preseason game",
            weight: 0.052618887,
          },
          {
            name: "two preseason games",
            weight: 0.052618887,
          },
          {
            name: "backup defenses",
            weight: 0.051657572,
          },
          {
            name: "Saturday’s game",
            weight: 0.050742883,
          },
        ],
        topics: [
          {
            name: "NFL",
          },
          {
            name: "Football",
          },
        ],
        categories: [
          {
            name: "Sports",
          },
        ],
        entities: [
          {
            data: "Jets",
            type: "ORG",
            mentions: 4,
          },
          {
            data: "the Buffalo Bills",
            type: "ORG",
            mentions: 1,
          },
          {
            data: "Packers",
            type: "ORG",
            mentions: 1,
          },
          {
            data: "Green Bay",
            type: "ORG",
            mentions: 1,
          },
          {
            data: "New York",
            type: "GPE",
            mentions: 1,
          },
          {
            data: "Davis",
            type: "PERSON",
            mentions: 4,
          },
          {
            data: "Wilson",
            type: "PERSON",
            mentions: 3,
          },
          {
            data: "Kroft",
            type: "PERSON",
            mentions: 2,
          },
          {
            data: "Kurt Benkert",
            type: "PERSON",
            mentions: 2,
          },
          {
            data: "Lawson",
            type: "PERSON",
            mentions: 2,
          },
          {
            data: "Corey Davis",
            type: "PERSON",
            mentions: 1,
          },
          {
            data: "Elijah Moore",
            type: "PERSON",
            mentions: 1,
          },
          {
            data: "Chris Herndon",
            type: "PERSON",
            mentions: 1,
          },
          {
            data: "Aaron Rodgers",
            type: "PERSON",
            mentions: 1,
          },
          {
            data: "Jordan Love",
            type: "PERSON",
            mentions: 1,
          },
          {
            data: "AJ Dillon",
            type: "PERSON",
            mentions: 1,
          },
          {
            data: "Malik Taylor",
            type: "PERSON",
            mentions: 1,
          },
          {
            data: "Quinnen Williams",
            type: "PERSON",
            mentions: 1,
          },
          {
            data: "Sheldon Rankins",
            type: "PERSON",
            mentions: 1,
          },
          {
            data: "Blessuan Austin",
            type: "PERSON",
            mentions: 1,
          },
          {
            data: "Vinny Curry",
            type: "PERSON",
            mentions: 1,
          },
          {
            data: "Lamarcus Joyner",
            type: "PERSON",
            mentions: 1,
          },
          {
            data: "Jarrad Davis",
            type: "PERSON",
            mentions: 1,
          },
          {
            data: "Isaiah Dunn",
            type: "PERSON",
            mentions: 1,
          },
          {
            data: "Tanzel Smart",
            type: "PERSON",
            mentions: 1,
          },
          {
            data: "Saleh",
            type: "PERSON",
            mentions: 1,
          },
        ],
        sentiment: {
          positive: 0.16259009,
          negative: 0.04949439,
          neutral: 0.7879155,
        },
        summary:
          "There have only been two preseason games, both against backup defenses, but Wilson continues to check all the boxes. He’s been the most productive of the five first-round rookie quarterbacks thus far and doesn’t look fazed by the overall speed of the game. Instead, Benkert and the backup offense marched right down the field on two of their first three drives for touchdowns. Lawson is done for the year, but Quinnen Williams, Sheldon Rankins, Blessuan Austin and Vinny Curry all missed Saturday’s game due to injury.",
        translation: "",
        locations: [],
        reprint: false,
        places: null,
      },
      {
        url: "https://www.ansa.it/sito/videogallery/mondo/2021/08/22/messico-colpito-dalluragano-grace-almeno-otto-i-morti_91947b5b-b108-4800-b4cb-2efed3988892.html",
        authorsByline: "",
        articleId: "204d5bb060d94f41889e0be991702842",
        clusterId: "9d81ee43fb384ce9ada96890781b8fee",
        source: {
          domain: "ansa.it",
          location: null,
        },
        imageUrl:
          "https://www.ansa.it/webimages/img_700/2021/8/22/9b1c79feaca0a2406d7af304a84be102.jpg",
        country: "it",
        language: "it",
        pubDate: "2021-08-22T09:21:00+00:00",
        addDate: "2021-08-24T18:14:35.562618+00:00",
        refreshDate: "2021-08-24T18:14:35.562618+00:00",
        score: 1,
        title:
          "Messico colpito dall'uragano Grace: almeno otto i morti - Mondo",
        description:
          "Messico colpito dall'uragano Grace: almeno otto i morti - Mondo  Agenzia ANSA",
        content: "",
        medium: "Article",
        labels: [],
        matchedAuthors: [],
        claim: "",
        verdict: "",
        keywords: [],
        topics: [],
        categories: [],
        entities: [],
        summary: "",
        translation: "",
        locations: [],
        reprint: false,
        places: null,
      },
      {
        url: "https://www.johnsoncitypress.com/the-salvation-army-responds-to-tropical-storm-henri/article_5c6011df-a707-5314-adac-a81865663d66.html",
        authorsByline: "The Salvation Army",
        articleId: "8f99c8b6d989473baf1a5f13c44a6a5a",
        clusterId: "f97a2d6f96874f80928f6457d69d59a6",
        source: {
          domain: "johnsoncitypress.com",
          location: null,
        },
        imageUrl:
          "https://bloximages.newyork1.vip.townnews.com/johnsoncitypress.com/content/tncms/assets/v3/editorial/f/35/f35a4a0b-068c-50af-b7f6-66f22f36364a/603945659782c.image.jpg?crop=1029%2C579%2C235%2C0&resize=1029%2C579&order=crop%2Cresize",
        country: "us",
        language: "en",
        pubDate: "2021-08-22T19:18:00+00:00",
        addDate: "2021-08-24T18:14:35.562841+00:00",
        refreshDate: "2021-08-24T18:14:35.562841+00:00",
        score: 1,
        title: "The Salvation Army Responds to Tropical Storm Henri",
        description:
          "The Salvation Army Responds to Tropical Storm Henri  Johnson City Press (subscription)",
        content:
          "ALEXANDRIA, Va., Aug. 22, 2021 /PRNewswire/ -- The Salvation Army is activating its Emergency Disaster Services personnel to meet the immediate needs of survivors and first responders affected by Trop... [3301 symbols]",
        medium: "Article",
        labels: [],
        matchedAuthors: [],
        claim: "",
        verdict: "",
        keywords: [
          {
            name: "Salvation Army",
            weight: 0.09520822,
          },
          {
            name: "Salvation Army disaster personnel",
            weight: 0.09203672,
          },
          {
            name: "social services",
            weight: 0.08292755,
          },
          {
            name: "service delivery",
            weight: 0.07421483,
          },
          {
            name: "need",
            weight: 0.07206738,
          },
          {
            name: "ongoing disaster relief efforts",
            weight: 0.07174964,
          },
          {
            name: "food distribution sites",
            weight: 0.06768646,
          },
          {
            name: "response efforts",
            weight: 0.0671031,
          },
          {
            name: "updated personal protective equipment requirements",
            weight: 0.067001395,
          },
          {
            name: "impacted areas",
            weight: 0.066889785,
          },
        ],
        topics: [
          {
            name: "Salvation Army",
          },
        ],
        categories: [
          {
            name: "Weather",
          },
        ],
        entities: [
          {
            data: "America's Favorite Charities",
            type: "WORK_OF_ART",
            mentions: 1,
          },
          {
            data: "Tropical Storm Henri",
            type: "EVENT",
            mentions: 2,
          },
          {
            data: "Henri",
            type: "EVENT",
            mentions: 1,
          },
          {
            data: "Americans",
            type: "NORP",
            mentions: 1,
          },
          {
            data: "The Salvation Army",
            type: "ORG",
            mentions: 11,
          },
          {
            data: "Emergency Disaster Services",
            type: "ORG",
            mentions: 3,
          },
          {
            data: "Fixed Corps",
            type: "ORG",
            mentions: 1,
          },
          {
            data: "The Chronicle of Philanthropy",
            type: "ORG",
            mentions: 1,
          },
          {
            data: "@SalvationArmyUS",
            type: "ORG",
            mentions: 1,
          },
          {
            data: "ALEXANDRIA",
            type: "GPE",
            mentions: 1,
          },
          {
            data: "Va.",
            type: "GPE",
            mentions: 1,
          },
          {
            data: "Rhode Island",
            type: "GPE",
            mentions: 1,
          },
          {
            data: "USA",
            type: "GPE",
            mentions: 1,
          },
          {
            data: "Robert Myers III",
            type: "PERSON",
            mentions: 1,
          },
          {
            data: "Eastern Territory",
            type: "LOC",
            mentions: 1,
          },
        ],
        sentiment: {
          positive: 0.17898655,
          negative: 0.014018097,
          neutral: 0.80699533,
        },
        summary:
          "This could limit the ability for relief teams to reach those in need, including sustained water damage to structures that obstruct access to impacted areas. \n\nIn addition, Salvation Army disaster personnel are collaborating with federal, state, and local emergency management agencies and other partners to respond to and monitor ongoing impacts and evolve response efforts as needed. In light of the pandemic, The Salvation Army has evolved service delivery with extra precautions such as social distancing at food distribution sites, adapted feeding models and updated personal protective equipment requirements. \n\nTo make a financial gift to support ongoing disaster relief efforts:\n\nThe Salvation Army annually helps 30 million Americans overcome poverty, addiction, and economic hardships through a range of social services.",
        translation: "",
        locations: [],
        reprint: true,
        places: null,
      },
      {
        url: "https://floridianpress.com/2021/08/kat-cammack-jabs-pelosi-over-naive-response-to-afghanistan-debacle/",
        authorsByline: "",
        articleId: "5b00470edd59432ca74b38270c5502ec",
        clusterId: "eea6fa01adf649f4bc756fb89cf1600a",
        source: {
          domain: "floridianpress.com",
          location: null,
        },
        imageUrl:
          "https://floridianpress.com/wp-content/uploads/2021/07/kat-scaled-e1627419272924.jpg",
        country: "us",
        language: "en",
        pubDate: "2021-08-22T19:26:51+00:00",
        addDate: "2021-08-24T18:14:35.563459+00:00",
        refreshDate: "2021-08-24T18:14:35.563459+00:00",
        score: 1,
        title:
          "Kat Cammack Jabs Pelosi Over Naive Response to Afghanistan Debacle",
        description:
          "Kat Cammack Jabs Pelosi Over Naive Response to Afghanistan Debacle  The Floridian",
        content:
          "As the Biden Administration has seemingly accepted the Taliban’s takeover of Afghanistan, Republican congressional members have had a field day with bashing Biden over the Afghan debacle, including US... [1960 symbols]",
        medium: "Article",
        labels: [],
        matchedAuthors: [],
        claim: "",
        verdict: "",
        keywords: [
          {
            name: "House Speaker Nancy Pelosi",
            weight: 0.10412951,
          },
          {
            name: "Rep. Cammack",
            weight: 0.10270174,
          },
          {
            name: "US Rep. Kat Cammack",
            weight: 0.09888808,
          },
          {
            name: "Kat Cammack",
            weight: 0.0956803,
          },
          {
            name: "Speaker Pelosi",
            weight: 0.09462995,
          },
          {
            name: "Cammack",
            weight: 0.09278139,
          },
          {
            name: "place",
            weight: 0.082241446,
          },
          {
            name: "Rep. Pelosi",
            weight: 0.07632449,
          },
          {
            name: "House",
            weight: 0.07068025,
          },
          {
            name: "Americans",
            weight: 0.06786147,
          },
        ],
        topics: [
          {
            name: "Afghanistan",
          },
          {
            name: "Nancy Pelosi",
          },
        ],
        categories: [
          {
            name: "Politics",
          },
        ],
        entities: [
          {
            data: "Americans",
            type: "NORP",
            mentions: 5,
          },
          {
            data: "Republican",
            type: "NORP",
            mentions: 1,
          },
          {
            data: "Afghan",
            type: "NORP",
            mentions: 1,
          },
          {
            data: "R",
            type: "NORP",
            mentions: 1,
          },
          {
            data: "D",
            type: "NORP",
            mentions: 1,
          },
          {
            data: "Democrat",
            type: "NORP",
            mentions: 1,
          },
          {
            data: "House",
            type: "ORG",
            mentions: 3,
          },
          {
            data: "Taliban",
            type: "ORG",
            mentions: 2,
          },
          {
            data: "the Biden Administration",
            type: "ORG",
            mentions: 1,
          },
          {
            data: "Fox News",
            type: "ORG",
            mentions: 1,
          },
          {
            data: "Defense",
            type: "ORG",
            mentions: 1,
          },
          {
            data: "State",
            type: "ORG",
            mentions: 1,
          },
          {
            data: "Fox",
            type: "ORG",
            mentions: 1,
          },
          {
            data: "the State Department",
            type: "ORG",
            mentions: 1,
          },
          {
            data: "Afghanistan",
            type: "GPE",
            mentions: 2,
          },
          {
            data: "FL",
            type: "GPE",
            mentions: 2,
          },
          {
            data: "US",
            type: "GPE",
            mentions: 1,
          },
          {
            data: "CA",
            type: "GPE",
            mentions: 1,
          },
          {
            data: "Kat Cammack",
            type: "PERSON",
            mentions: 8,
          },
          {
            data: "Nancy Pelosi",
            type: "PERSON",
            mentions: 3,
          },
          {
            data: "Biden",
            type: "PERSON",
            mentions: 1,
          },
          {
            data: "Austin",
            type: "PERSON",
            mentions: 1,
          },
          {
            data: "Blinken",
            type: "PERSON",
            mentions: 1,
          },
          {
            data: "Milley",
            type: "PERSON",
            mentions: 1,
          },
          {
            data: "Uber",
            type: "PRODUCT",
            mentions: 1,
          },
          {
            data: "about 10 minutes",
            type: "TIME",
            mentions: 1,
          },
        ],
        sentiment: {
          positive: 0.05843315,
          negative: 0.46197215,
          neutral: 0.47959477,
        },
        summary:
          "As the Biden Administration has seemingly accepted the Taliban’s takeover of Afghanistan, Republican congressional members have had a field day with bashing Biden over the Afghan debacle, including US Rep. Kat Cammack (R-FL), who is going after House Speaker Nancy Pelosi (D-CA) for her responsibility in the chaos. Everyone just needs to get to the airport.”\n\nCammack told Fox that it “speaks volumes of not just the administration, and how they handled this utter, total failure, but Democrat leadership in general,” adding that “When the Speaker of the House is saying that ‘Everything should be in a good place, everybody just needs to get to the airport’ it took me about 10 minutes just to get my jaw up off the desk.”\n\n“I couldn’t believe that when we have left Americans behind, when we have one of the worst examples of an American military failure, no contingency plans in place, and the Speaker of the House is saying ‘everything seems fine’ Madam Speaker, you can’t just take an Uber to the airport! Not a casual stroll through the street” stated Rep. Cammack on Rep. Pelosi. \n\nCammack also commented on the mixed messaging over the current status of the region, claiming that some sources are telling people to stay in place while mainstream media has been naive about the threat posed by the Taliban.\n\nCammack reported that her office is working on getting 187 Americans home, and they are just from Florida’s third congressional district alone.\n\nHowever, according to Cammack, the State Department is still telling Americans to go to the airport .”",
        translation: "",
        locations: [],
        reprint: false,
        places: null,
      },
    ],
    numResults: 10000,
    isLoading: false,
    error: null,
  };

  //variable to control the state of the card
  const [expandedMap, setExpandedMap] = useState({});

  //function to set the expanded <> collapsible when clicked
  const handleExpandClick = (articleId) => {
    setExpandedMap((prevExpandedMap) => ({
      ...prevExpandedMap,
      [articleId]: !prevExpandedMap[articleId],
    }));
  };

  // Render your component based on the state values (isLoading)
  if (isLoading) {
    return <div className="loader centered"></div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h3 className="text-center">Top Articles</h3>
      <p className="text-center">Found {numResults} Articles</p>

      <div className="card-container">
        {articles.map((article) => (
          <Card
            sx={{ maxWidth: 350, margin: 0.8, borderRadius: 5 }}
            key={article.articleId}
          >
            <CardContent style={{ paddingBottom: 0 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography variant="body2">
                  <span>
                    <a
                      className="card-title"
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkIcon /> {article.source.domain}
                    </a>
                  </span>
                </Typography>
              </div>
            </CardContent>
            <CardHeader
              title={
                <a
                  className="card-title"
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {article.title}
                </a>
              }
              subheader={
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span>
                    <FormatDate updatedAt={article.pubDate} />
                  </span>
                  <span style={{ marginLeft: "1rem" }}>
                    <CalculateSentiment sentimentArr={article.sentiment} />
                  </span>
                </div>
              }
            />
            <CardMedia
              component="img"
              height="194"
              image={article.imageUrl}
              alt="Article Image"
              onError={(e) => {
                e.target.src = "/src/assets/factFlow_404.png"; //if image URL returns 404 just use the stock image instead
              }}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {article.description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <CardContent>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Typography variant="body2">
                    <span>
                      {article.authorsByline ? <PersonOutlineIcon /> : null}{" "}
                      {article.authorsByline}
                    </span>
                  </Typography>
                </div>
              </CardContent>

              <ExpandMore
                expand={expandedMap[article.articleId] || false}
                onClick={() => handleExpandClick(article.articleId)}
                aria-expanded={expandedMap[article.articleId] || false}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse
              in={expandedMap[article.articleId] || false}
              timeout="auto"
              unmountOnExit
            >
              <CardContent>
                <Typography paragraph>{article.summary}</Typography>
              </CardContent>
            </Collapse>
          </Card>
        ))}
      </div>
    </div>

    // const { factCheck, loading, result, error } = useFactCheck()
    // factCheck({article.summary})
  );
};

export default DisplayArticles;