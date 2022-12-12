{
  'variables': {
    'rootdir': '<!(node -p "process.cwd()")',
  },
  'targets': [{
    'target_name': 'addon',
    'sources': [
      'addon.cc',
    ],
    'defines': [
      'NAPI_DISABLE_CPP_EXCEPTIONS',
    ],
    'include_dirs': [
      '<!@(node -p "require(\'node-addon-api\').include")',
      '<(rootdir)/protobuf/src',
      '<(rootdir)/protobuf/third_party/utf8_range',
      '<(rootdir)/protobuf/third_party/jsoncpp',
      '<(rootdir)/protobuf/third_party/googletest',
      '<(rootdir)/protobuf/third_party/abseil-cpp',
    ],
    'libraries': [
      '<(rootdir)/protobuf/bazel-bin/src/google/protobuf/compiler/libprotoc_nowkt<(SHARED_LIB_SUFFIX)',
    ],
    'cflags_cc': [
      '-std=c++17',
      '-Wall',
      '-Wextra',
      '-Werror',
      '-Wno-unused-parameter',
      '-Wno-deprecated-copy',
    ],
    'conditions': [
      ['OS=="linux"', {
        'libraries+': [
          '-Wl,--start-group',
        ],
        'libraries': [
          '-Wl,--end-group',
        ],
      }],
      ['OS=="mac"', {
        'xcode_settings': {
          'CLANG_CXX_LANGUAGE_STANDARD': 'c++17',
          'GCC_TREAT_WARNINGS_AS_ERRORS': 'YES',
          'OTHER_CPLUSPLUSFLAGS': [
            '$(inherited)',
            '-Wall',
            '-Wextra',
            '-Wno-unused-parameter',
          ],
        },
      }],
      ['OS=="win"', {
        'msvs_settings': {
          'VCCLCompilerTool': {
            'WarningLevel': '4',
            'WarnAsError': 'true',
            'DisableSpecificWarnings': [
              '4100',
              '4127',
            ],
            'AdditionalOptions': [
              '-std:c++17',
            ],
          },
        },
        'libraries': [
          'ws2_32.lib',
          'shlwapi.lib',
        ],
      }],
    ],
  }]
}
