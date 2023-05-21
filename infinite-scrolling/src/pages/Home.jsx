import { useToast } from '@chakra-ui/react';
import { SkeletonE } from '../components/Skeleton';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

export const Home = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [page, setPage] = useState(1);
	const toast = useToast();

	const fetchData = async () => {
		setLoading(true);
		try {
			setTimeout(async () => {
				const res = await axios.get(`https://randomuser.me/api/?results=15&nat=us&inc=name,picture&page=${page}`);
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
			{data.length > 0 && data.map((el, index) => (
				<div key={index} width={{ base: "100%", md: "80%", xl: "70%", "2xl": "70%" }} style={{ display: "flex", justifyContent: "space-between", margin: "10px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", padding: "10px", margin: "auto", alignItems: "center", width: "80%", marginBottom: "15px", backgroundColor: (index % 2 == 0) ? "white" : "#edf2f7" }}>
					<h1 style={{ marginLeft: "10px", padding: "10px", color: "gray" }}>
						{el.name.title} {el.name.first} {el.name.last}
					</h1>
					<div style={{ marginRight: "10px", padding: "10px", borderRadius: "10px" }}>
						<img style={{ borderRadius: "25px" }} src={el.picture.thumbnail} alt={index} />
					</div>
				</div>
			))}
			{loading && <SkeletonE />}
		</InfiniteScroll>
	);
};
