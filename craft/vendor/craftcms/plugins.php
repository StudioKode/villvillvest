<?php

$vendorDir = dirname(__DIR__);
$rootDir = dirname(dirname(__DIR__));

return array (
  'craftcms/redactor' => 
  array (
    'class' => 'craft\\redactor\\Plugin',
    'basePath' => $vendorDir . '/craftcms/redactor/src',
    'handle' => 'redactor',
    'aliases' => 
    array (
      '@craft/redactor' => $vendorDir . '/craftcms/redactor/src',
    ),
    'name' => 'Redactor',
    'version' => '2.8.6',
    'description' => 'Edit rich text content in Craft CMS using Redactor by Imperavi.',
    'developer' => 'Pixel & Tonic',
    'developerUrl' => 'https://pixelandtonic.com/',
    'developerEmail' => 'support@craftcms.com',
    'documentationUrl' => 'https://github.com/craftcms/redactor/blob/v2/README.md',
  ),
  'servd/craft-asset-storage' => 
  array (
    'class' => 'servd\\AssetStorage\\Plugin',
    'basePath' => $vendorDir . '/servd/craft-asset-storage/src',
    'handle' => 'servd-asset-storage',
    'aliases' => 
    array (
      '@servd/AssetStorage' => $vendorDir . '/servd/craft-asset-storage/src',
    ),
    'name' => 'Servd Assets and Helpers',
    'version' => '2.2.6',
    'description' => 'Servd Asset Storage and Helpers integration for Craft CMS',
    'developer' => 'Servd',
    'developerUrl' => 'https://servd.host/',
    'developerEmail' => 'hello@servd.host',
    'documentationUrl' => 'https://github.com/servdhost/craft-asset-storage',
  ),
);
