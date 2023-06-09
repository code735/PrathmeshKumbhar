import { Flex, Heading } from "@chakra-ui/react";
import * as React from "react";
import useGithubStats from "react-github-user-stats";

export const GithubStat = () => {
    const { error, loading, userData } = useGithubStats("code735");

    if (loading) return <h1>Loading data..</h1>;
    if (error) return <h1>ERROR: {error}</h1>;
    if (!userData) return <h1>Not found!</h1>;

    console.log(userData)

    return (
        <div>
            <Flex
                flexDir={'column'}
                gap={'20px'}
                height={'100%'}
                justifyContent={'space-between'}
                color={'white'}
            >
                <Heading as={'h3'} fontWeight={'100'} fontSize={['1rem', '', '', '2rem']} fontFamily={'EB Garamond, serif'}>
                    Username : {userData.username}
                </Heading>
                <Heading as={'h3'} fontWeight={'100'} fontSize={['1rem', '', '', '2rem']} fontFamily={'EB Garamond, serif'}>
                    Followers : {userData.followers}
                </Heading>
                <Heading as={'h3'} fontWeight={'100'} fontSize={['1rem', '', '', '2rem']} fontFamily={'EB Garamond, serif'}>
                    Repositories : {userData.public_repos}
                </Heading>
                <Heading as={'h3'} fontWeight={'100'} fontSize={['1rem', '', '', '2rem']} fontFamily={'EB Garamond, serif'}>
                    Forks : {userData.total_forks}
                </Heading>
            </Flex>
        </div>
    );
};
