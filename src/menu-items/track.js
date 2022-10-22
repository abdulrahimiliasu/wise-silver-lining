// assets
import { IconBusinessplan, IconCoin, IconWallet } from '@tabler/icons';

// constant
const icons = {
    IconCoin,
    IconBusinessplan,
    IconCoin,
    IconWallet
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const track = {
    id: 'Track',
    title: 'Track',
    type: 'group',
    children: [
        {
            id: 'groups',
            title: 'International Spending',
            type: 'collapse',
            icon: icons.IconBusinessplan,

            children: [
                {
                    id: 'reards',
                    title: 'My Trips',
                    type: 'item',
                    url: '/spending/my-trips',
                    icon: icons.IconCoin,
                    breadcrumbs: false
                },
                {
                    id: 'register3',
                    title: 'Plan',
                    type: 'item',
                    url: '/spending/plan',
                    icon: icons.IconWallet,
                    target: false
                }
            ]
        }
    ]
};

export default track;
