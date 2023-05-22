import { Box, useToast } from '@chakra-ui/react';
import { SkeletonE } from '../components/Skeleton';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from '../components/Card';

export const Home = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [page, setPage] = useState(1);
	const toast = useToast();

	const fetchData = async () => {
		setLoading(true);
		try {
			setTimeout(async () => {
				const res = await axios.get(`https://randomuser.me/api/?results=40&nat=us&inc=name,picture&page=${page}`);
				setData(prevData => [...prevData, ...res.data.results]);
				setLoading(false);
				setPage(prevPage => prevPage + 1);
			}, 1000)
		} catch (error) {
			// console.log(error);
			toast({
				title: `${error.message}`,
				status: "error",
				isClosable: true,
				position: "top"
			})
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<InfiniteScroll
			dataLength={data.length}
			next={fetchData}
			hasMore={true}
			loader={<SkeletonE />}
		>
			<Box display="grid" gap={"10px"} gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)", xl: "repeat(4, 1fr)", "2xl": "repeat(4, 1fr)" }}>
				{data.length > 0 && data.map((el, index) => {
					return <Card
						key={index}
						{...el}
						index={index}
					/>
				})}
			</Box>
			{loading && <SkeletonE />}
		</InfiniteScroll>
	);
};
