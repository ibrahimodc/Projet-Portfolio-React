import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProjets, addProjet, deleteProjet, updateProjet } from '../services/api';
import Projet from './Projet';
import AjouterProjet from './AjouterProjet';
import DetaillerProjet from './DetaillerProjet';
import EditerProjet from './EditerProjet';