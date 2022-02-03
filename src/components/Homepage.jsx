import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";

import { useGetCryptosQuery } from "../services/cryptoApi";
import { Cryptocurrencies, News } from "../components"
import Loader from "./Loader"

const { Title } = Typography;


const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if(isFetching) return <Loader />
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}><Statistic title="Nombre de Cryptomonnaies" value={globalStats.total} /></Col>
        <Col span={12}><Statistic title="Nombre d'exchanges" value={millify(globalStats.totalExchanges)}/></Col>
        <Col span={12}><Statistic title="Market Cap Total" value={millify(globalStats.totalMarketCap)} /></Col>
        <Col span={12}><Statistic title="Volume en 24h" value={millify(globalStats.total24hVolume)} /></Col>
        <Col span={12}><Statistic title="Nombre de marchés" value={millify(globalStats.totalMarkets)} /></Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">Top 10 des Cryptomonnaies</Title>
        <Title level={3} className="show-more"><Link to="/cryptocurrencies">Voir plus</Link></Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">Dernières news</Title>
        <Title level={3} className="show-more"><Link to="/news">Voir plus</Link></Title>
      </div>
      <News simplified />
    </>
  );
};

export default Homepage;
