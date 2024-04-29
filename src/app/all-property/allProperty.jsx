'use client';

import React from "react";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import PropertyFilter from "@/components/all-property/PropertyFilter";
import PropertyFlatList from "@/components/all-property/PropertyFlatList";
import ProjectCompareSidebar from "@/components/all-property/ProjectCompareSidebar";
import ConnectWithTopAgents from "@/components/all-property/ConnectWithTopAgents";
import InterestingReads from "@/components/all-property/InterestingReads";
import FNQ from "@/components/localities/FNQ";
import { ComparePropertyProvider } from "@/context/ComparePropertyContext";
import Insights from "@/components/all-property/Insights";
import { useCompareProperty } from "@/context/ComparePropertyContext";

const AllProperty = () => {
  
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }


  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      className="text-blue-500"
      href="/"
      onClick={handleClick}
    >
      Home
    </Link>,
    <Typography key="2" className="text-blue-500">
      Properties in Gurgaon
    </Typography>,
  ];


  const { compareProperties } = useCompareProperty();


  return (
    
   
       
      <div className=" py-[3rem] px-[8rem] md:mx-[4%]  w-full rounded-xl max-md:px-[4rem] max-sm:px-5">
        <div className="flex flex-row w-full">
          <div className="w-[25%] max-xl:w-0">
            <div className="my-4 max-xl:hidden">
              <Stack spacing={2}>
                <Breadcrumbs
                  separator={<NavigateNextIcon fontSize="small" />}
                  aria-label="breadcrumb"
                >
                  {breadcrumbs}
                </Breadcrumbs>
              </Stack>
            </div>
            <PropertyFilter />
            <ConnectWithTopAgents />
          </div>

    
          <PropertyFlatList />

         
          {compareProperties.length > 0 
        && (
            <ProjectCompareSidebar />
          )}
        </div>
        <Insights />
        <InterestingReads />
        <FNQ />
      </div>

  );
};

export default AllProperty;
