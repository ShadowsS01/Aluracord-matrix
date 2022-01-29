import { Box, Image, Button } from '@skynexui/components';
import React from 'react';
import { useRouter } from 'next/router'

export function Header() {
    const roteamento = useRouter();
    const username = roteamento.query.username;

    return (
        <>
            <Box styleSheet={{ width: '100%', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                <Box variant='heading5'
                    styleSheet={{
                        display: "flex"
                    }}
                >
                    <Image
                        styleSheet={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            display: 'inline-block',
                            marginRight: '5px',
                        }}
                        src={`https://github.com/${username}.png`}
                    />
                    {username}
                </Box>
                <text
                    styleSheet={{
                    }}
                >
                    Chat
                </text>
                <Button
                    variant='tertiary'
                    colorVariant='light'
                    label='Logout'
                    href="/"
                    styleSheet={{
                        backgroundColor: 'transparent',
                        hover: {
                            color: 'white',
                            backgroundColor: 'black',
                        }
                    }}
                />
            </Box>
        </>
    )
}