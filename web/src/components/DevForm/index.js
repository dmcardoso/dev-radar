import React, { useState, useEffect } from 'react';
import api from '../../services/api';

export default function DevForm({ onSubmit }) {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [github_username, setGithubUsername] = useState('');
    const [techs, setTechs] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;

                setLatitude(latitude);
                setLongitude(longitude);
            },
            err => {
                console.log(err);
            },
            {
                timeout: 30000
            }
        );
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();

        await onSubmit({
            github_username,
            techs,
            latitude,
            longitude
        });

        setGithubUsername('');
        setTechs('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-block">
                <label htmlFor="github_username">Usuário do Github</label>
                <input
                    type="text"
                    name="github_username"
                    id="github_username"
                    value={github_username}
                    required
                    onChange={e => setGithubUsername(e.target.value)}
                />
            </div>
            <div className="input-block">
                <label htmlFor="techs">Tecnologias</label>
                <input
                    type="text"
                    name="techs"
                    id="techs"
                    value={techs}
                    onChange={e => setTechs(e.target.value)}
                    required
                />
            </div>
            <div className="input-group">
                <div className="input-block">
                    <label htmlFor="techs">Latitude</label>
                    <input
                        type="number"
                        name="latitude"
                        id="latitude"
                        value={latitude}
                        required
                        onChange={e => setLatitude(e.target.value)}
                    />
                </div>
                <div className="input-block">
                    <label htmlFor="techs">Longitude</label>
                    <input
                        type="number"
                        name="longitude"
                        value={longitude}
                        id="longitude"
                        required
                        onChange={e => setLongitude(e.target.value)}
                    />
                </div>
            </div>
            <button type="submit">Salvar</button>
        </form>
    );
}
