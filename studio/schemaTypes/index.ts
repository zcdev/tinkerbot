import { type SchemaTypeDefinition } from 'sanity';
import { home } from './home';
import { game } from './game';
import { gameCharacter } from './gameCharacter';
import { gamePlayHighlight } from './gameplayHighlight';

export const schemaTypes: SchemaTypeDefinition[] = [home, game, gameCharacter, gamePlayHighlight];
