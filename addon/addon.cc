#include <napi.h>
#include <google/protobuf/descriptor.h>

class ProtobufAddon : public Napi::Addon<ProtobufAddon> {
public:
  ProtobufAddon(Napi::Env env, Napi::Object exports) {
    DefineAddon(exports, {InstanceMethod("update", &ProtobufAddon::Update)});
  }

private:
  auto Update(const Napi::CallbackInfo &info) -> Napi::Value {
    auto env = info.Env();
    return env.Null();
  }
};

NODE_API_ADDON(ProtobufAddon) // NOLINT
