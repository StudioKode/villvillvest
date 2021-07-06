<?php

return [
    'defaultProfile' => 'standard',
    
    'fieldProfiles' => [
        'standard' => [
            'title' => ['seoTitle', 'heading', 'title'],
            'description' => ['seoDescription', 'summary'],
            'image' => ['featureImage', 'seoImage', 'mainImage']
        ]
    ],
];