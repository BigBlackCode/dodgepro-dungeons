/**
 * This file is part of Dodgepro.
 *
 * Dodgepro is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Dodgepro is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Dodgepro.  If not, see <https://www.gnu.org/licenses/>.
 */

import Phaser from 'phaser'

export default class extends Phaser.Scene {
    constructor() {
        super({key: 'AboutScene'});
    }

    create() {
        const headingStyle = {
            font: '64px Rajdhani, sans-serif',
            fill: '#ffffff',
            align: 'center'
        };

        const heading = `About`;

        this.add.text(400, 150, heading, headingStyle).setOrigin(0.5, 0.5);

        const style = {
            font: '24px Rajdhani, sans-serif',
            fill: '#ffffff',
            align: 'center'
        };

        const content = `This is the about content with a new line`;

        this.add.text(400, 300, content, style).setOrigin(0.5, 0.5);

        const menuStyle = {
            font: '32px Rajdhani, sans-serif',
            fill: '#ffffff',
            align: 'center'
        };

        const back = this.add.text(400, 400, 'Back', menuStyle).setInteractive().setOrigin(0.5, 0.5);

        back.on('pointerup', () => {
            this.scene.start('MenuScene');
        });
    }
}
