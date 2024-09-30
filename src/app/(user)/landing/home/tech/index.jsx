import React from "react";

import ang from "../../../../../../public/images/tech/ang.png";
import react from "../../../../../../public/images/tech/react.png";
import py from "../../../../../../public/images/tech/py.png";
import mgdb from "../../../../../../public/images/tech/mgdb.png";
import node from "../../../../../../public/images/tech/node.png";
import vue from "../../../../../../public/images/tech/vue.png";
import redis from "../../../../../../public/images/tech/redis.png";
import js from "../../../../../../public/images/tech/js.png";
import sql from "../../../../../../public/images/tech/sql.png";
import psql from "../../../../../../public/images/tech/psql.png";
import azure from "../../../../../../public/images/tech/az.png";
import aws from "../../../../../../public/images/tech/aws.png";
import graph from "../../../../../../public/images/tech/graph.png";
import dart from "../../../../../../public/images/tech/dart.png";
import firebase from "../../../../../../public/images/tech/firebase.png";
import tsxc from "../../../../../../public/images/tech/ts.png";
import git from "../../../../../../public/images/tech/git.png";
import wordpress from "../../../../../../public/images/tech/wordpress.png";
import btc from "../../../../../../public/images/tech/blk.png";
import tf from "../../../../../../public/images/tech/tf.png";
import rust from "../../../../../../public/images/tech/rust.png";
import gcp from "../../../../../../public/images/tech/gcp.png";

import Image from "next/image";
const Tech = () => {
  return (
    <div className="flex  flex-col justify-center space-x-5 space-y-5 mt-16 items-center ">
      <div className="grid grid-cols-3 md:flex lg:flex space-x-8">
        <Image src={react} className="h-16 w-16" />
        <Image src={py} className="h-16 w-16" />
        <Image src={ang} className="h-16 w-16" />
        <Image src={aws} className="h-16 w-16" />
        <Image src={gcp} className="h-16 w-16" />
        <Image src={azure} className="h-16 w-16" />
        <Image src={js} className="h-16 w-16" />
        <Image src={tsxc} className="h-16 w-16" />
        <Image src={rust} className="h-16 w-16" />
      </div>
      <div className="grid grid-cols-3 md:flex lg:flex space-x-8 justify-center items-center">
        <Image src={sql} className="h-16 w-16" />
        <Image src={psql} className="h-16 w-16" />
        <Image src={mgdb} className="h-16 w-16" />
        <Image src={graph} className="h-16 w-16" />
        <Image src={redis} className="h-16 w-16" />
        <Image src={firebase} className="h-16 w-16" />
      </div>
      <div className="grid grid-cols-4 md:flex lg:flex space-x-8 justify-center items-center">
        <Image src={node} className="h-16 w-16" />
        <Image src={vue} className="h-16 w-16" />
        <Image src={tf} className="h-16 w-16" />
        <Image src={btc} className="h-16 w-16" />
      </div>
      <div className="grid grid-cols-3 md:flex lg:flex space-x-8 justify-center items-center">
        <Image src={wordpress} className="h-16 w-16" />
        <Image src={git} className="h-16 w-16" />
        <Image src={dart} className="h-16 w-16" />
      </div>
    </div>
  );
};

export default Tech;
